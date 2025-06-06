const cheerio = require('cheerio');
const fs = require('fs').promises;

class HayDayParser {
  parseTime(timeStr) {
    // Handle cases where there might be multiple times (e.g., "5 min★★★ 4 min" or "5 min\n★★★ 4 min")
    if (!timeStr) return '';

    // First split by stars, then by newlines to handle both cases
    let cleanTime = timeStr.split('★★★')[0];
    cleanTime = cleanTime.split('\n')[0];

    return cleanTime.trim();
  }

  parseTableRow($, tr) {
    const cells = $(tr).find('td');

    // Debug: Log cell count
    console.log(`Row has ${cells.length} cells`);

    // Skip header rows or rows without enough cells
    if (cells.length < 7) {
      console.log('Skipping row - not enough cells');
      return null;
    }

    try {
      const name = $(cells[0]).find('a').first().attr('title');
      const imageUrl = $(cells[0]).find('img').attr('data-src');
      const level = parseInt($(cells[1]).text().trim());
      const maxPrice = parseInt($(cells[2]).text().trim());
      const productionTime = this.parseTime($(cells[3]).text());
      const xp = parseInt($(cells[4]).text().trim());
      const ingredientsHtml = $(cells[5]).html();
      const producedIn = $(cells[6]).find('a').first().text().trim();

      // Debug: Log what we found
      console.log(`Parsed item: ${name}, level: ${level}, producedIn: ${producedIn}`);

      // Check if we have required data
      if (!name) {
        console.log('Skipping row - no name found');
        return null;
      }

      return {
        name,
        imageUrl,
        level,
        maxPrice,
        productionTime,
        xp,
        ingredientsHtml,
        producedIn,
      };
    } catch (err) {
      console.error('Error parsing row:', err);
      // Log the actual row content to help debug
      console.log('Row HTML:', $(tr).html());
      return null;
    }
  }

  parseIngredients(ingredientsHtml) {
    if (!ingredientsHtml) {
      console.log('No ingredients HTML provided');
      return [];
    }

    // Create a new Cheerio instance for parsing ingredients
    const $ = cheerio.load(ingredientsHtml);
    const ingredients = [];

    // Find all ingredient links
    $('a').each((_, el) => {
      const ingredient = $(el);
      const name = ingredient.attr('title');

      // Look for the amount in the text after the link
      const parentHtml = ingredient.parent().html();
      if (!parentHtml) return;

      const splitHtml = parentHtml.split(ingredient.toString());
      if (splitHtml.length < 2) return;

      const amountMatch = splitHtml[1].match(/\((\d+)\)/);
      const amount = amountMatch ? amountMatch[1] : '1';

      if (name) {
        ingredients.push({ name, amount: parseInt(amount) });
        console.log(`Found ingredient: ${name} (${amount})`);
      }
    });

    return ingredients;
  }

  generateCypherQueries(itemData) {
    const queries = [];

    // Escape quotes to prevent Cypher syntax errors
    const escapeName = (str) => str ? str.replace(/"/g, '\\"') : '';

    const itemName = escapeName(itemData.name);
    const producedIn = escapeName(itemData.producedIn);
    const imageUrl = escapeName(itemData.imageUrl || '');

    // Create Item node - Fixed syntax issues
    queries.push(`MERGE (item:Item {name: "${itemName}"})
SET item.level = ${itemData.level || 0},
    item.xp = ${itemData.xp || 0},
    item.maxPrice = ${itemData.maxPrice || 0},
    item.productionTime = "${itemData.productionTime || ''}",
    item.imageUrl = "${imageUrl}"`);

    // Create Production Location node and relationship - Fixed syntax
    if (itemData.producedIn) {
      queries.push(`MERGE (location:ProductionLocation {name: "${producedIn}"})
MERGE (item:Item {name: "${itemName}"})
MERGE (item)-[:PRODUCED_IN]->(location)`);
    }

    // Parse and create ingredient relationships - Fixed syntax
    if (itemData.ingredientsHtml) {
      const ingredients = this.parseIngredients(itemData.ingredientsHtml);

      ingredients.forEach(({ name, amount }) => {
        const ingredientName = escapeName(name);
        queries.push(`MATCH (item:Item {name: "${itemName}"})
MERGE (ingredient:Item {name: "${ingredientName}"})
MERGE (item)-[:REQUIRES {amount: ${amount}}]->(ingredient)`);
      });
    }

    console.log(`Generated ${queries.length} queries for ${itemName}`);
    return queries;
  }

  async processContent(content) {
    try {
      console.log('Starting content processing...');
      console.log(`Content length: ${content.length} characters`);

      if (!content || content.trim().length === 0) {
        throw new Error('Content is empty');
      }

      // Fixed the wrapping - removed extra spaces
      const wrappedContent = `<table>${content}</table>`;
      const $ = cheerio.load(wrappedContent);
      const allQueries = [];
      let processedCount = 0;

      const rows = $('tr');
      console.log(`Found ${rows.length} table rows`);

      rows.each((index, element) => {
        console.log(`\n--- Processing row ${index + 1} ---`);
        const itemData = this.parseTableRow($, element);

        if (itemData && itemData.name) {
          const queries = this.generateCypherQueries(itemData);
          allQueries.push(...queries);
          processedCount++;
        } else {
          console.log(`Row ${index + 1} skipped - no valid data`);
        }
      });

      console.log(`\n=== SUMMARY ===`);
      console.log(`Processed ${processedCount} items`);
      console.log(`Generated ${allQueries.length} total queries`);

      if (allQueries.length === 0) {
        console.log('WARNING: No queries generated. Check your HTML structure.');
        // Let's examine the first few rows
        console.log('\nFirst 3 rows for debugging:');
        rows.slice(0, 3).each((i, row) => {
          console.log(`Row ${i + 1}:`, $(row).html());
        });
        return [];
      }

      // Write queries to file
      const outputPath = 'cypher_queries.txt';
      const queryString = allQueries.join(';\n\n') + ';';

      await fs.writeFile(outputPath, queryString, 'utf8');

      console.log(`✅ Queries saved to ${outputPath}`);
      console.log(`✅ File size: ${queryString.length} characters`);

      return allQueries;
    } catch (err) {
      console.error('Error processing content:', err);
      throw err;
    }
  }
}

// Example usage with better error handling:
async function main() {
  const parser = new HayDayParser();

  try {
    console.log('🚀 Starting HayDay Parser...\n');

    // Check if file exists
    try {
      const stats = await fs.stat('./table_rows.html');
      console.log(`📁 File found: ${stats.size} bytes`);
    } catch (fileErr) {
      console.error('❌ File not found: ./table_rows.html');
      console.error('Make sure the file exists in the current directory');
      return;
    }

    const content = await fs.readFile('./table_rows.html', 'utf8');

    if (content.length === 0) {
      console.error('❌ File is empty');
      return;
    }

    await parser.processContent(content);
    console.log('\n🎉 Processing completed!');

  } catch (err) {
    console.error('❌ Error in main:', err.message);
    console.error('Full error:', err);
  }
}

main();
