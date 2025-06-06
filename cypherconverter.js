const fs = require('fs').promises;

class CypherTimeConverter {
  convertTimeToMinutes(timeString) {
    // Handle edge cases
    if (!timeString || timeString.toLowerCase() === 'instant') {
      return 0;
    }

    // Remove quotes and trim
    const cleanTime = timeString.replace(/['"]/g, '').trim();

    // Initialize total minutes
    let totalMinutes = 0;

    // Extract days
    const dayMatch = cleanTime.match(/(\d+)\s*d/i);
    if (dayMatch) {
      totalMinutes += parseInt(dayMatch[1]) * 24 * 60; // days to minutes
    }

    // Extract hours
    const hourMatch = cleanTime.match(/(\d+)\s*h/i);
    if (hourMatch) {
      totalMinutes += parseInt(hourMatch[1]) * 60; // hours to minutes
    }

    // Extract minutes
    const minMatch = cleanTime.match(/(\d+)\s*min/i);
    if (minMatch) {
      totalMinutes += parseInt(minMatch[1]);
    }

    return totalMinutes;
  }

  async processQueries(inputFile, outputFile = null) {
    try {
      console.log('🚀 Starting Cypher time conversion...\n');

      // Read the input file
      const content = await fs.readFile(inputFile, 'utf8');
      console.log(`📁 Read file: ${content.length} characters`);

      if (!content || content.trim().length === 0) {
        throw new Error('Input file is empty');
      }

      // Regular expression to find productionTime lines
      const productionTimeRegex = /(\s*item\.productionTime\s*=\s*)"([^"]*)"([,;]?)/g;

      let matchCount = 0;
      let conversions = [];

      // Replace all productionTime values
      const updatedContent = content.replace(productionTimeRegex, (match, prefix, timeValue, suffix) => {
        const originalTime = timeValue;
        const minutesValue = this.convertTimeToMinutes(timeValue);

        matchCount++;
        conversions.push({
          original: originalTime,
          converted: minutesValue,
          line: matchCount
        });

        console.log(`Line ${matchCount}: "${originalTime}" → ${minutesValue} minutes`);

        return `${prefix}${minutesValue}${suffix}`;
      });

      console.log(`\n=== CONVERSION SUMMARY ===`);
      console.log(`✅ Found and converted ${matchCount} production times`);

      if (matchCount === 0) {
        console.log('⚠️  No production time entries found to convert');
        return { conversions: [], outputFile: null };
      }

      // Determine output file name
      const finalOutputFile = outputFile || inputFile.replace(/\.txt$/, '_converted.txt');

      // Write the updated content
      await fs.writeFile(finalOutputFile, updatedContent, 'utf8');

      console.log(`✅ Updated queries saved to: ${finalOutputFile}`);
      console.log(`✅ File size: ${updatedContent.length} characters`);

      // Show conversion examples
      console.log('\n=== CONVERSION EXAMPLES ===');
      conversions.slice(0, 5).forEach(conv => {
        console.log(`"${conv.original}" → ${conv.converted} minutes`);
      });

      if (conversions.length > 5) {
        console.log(`... and ${conversions.length - 5} more conversions`);
      }

      return {
        conversions,
        outputFile: finalOutputFile,
        totalConverted: matchCount
      };

    } catch (err) {
      console.error('❌ Error processing queries:', err.message);
      throw err;
    }
  }

  // Method to test time conversion without file processing
  testTimeConversion() {
    const testCases = [
      '"1 d 5 h"',
      '"25 min"',
      '"1 h 20 min"',
      '"45 min"',
      '"2 h 30 min"',
      '"15 min"',
      '"2 h 15 min"',
      '"Instant"',
      '"3 d"',
      '"2 h"',
      '"30 min"'
    ];

    console.log('=== TIME CONVERSION TESTS ===');
    testCases.forEach(testCase => {
      const result = this.convertTimeToMinutes(testCase);
      console.log(`${testCase} → ${result} minutes`);
    });
  }
}

// Example usage
async function main() {
  const converter = new CypherTimeConverter();

  try {
    // Test the conversion logic first (optional)
    console.log('Testing conversion logic...\n');
    converter.testTimeConversion();
    console.log('\n' + '='.repeat(50) + '\n');

    // Process the actual file
    const inputFile = 'cypher_queries.txt';

    // Check if input file exists
    try {
      await fs.stat(inputFile);
      console.log(`📁 Input file found: ${inputFile}`);
    } catch (fileErr) {
      console.error(`❌ Input file not found: ${inputFile}`);
      console.error('Make sure the file exists in the current directory');
      return;
    }

    // Process the queries
    const result = await converter.processQueries(inputFile);

    console.log('\n🎉 Conversion completed successfully!');
    console.log(`📊 Total conversions: ${result.totalConverted}`);
    console.log(`📄 Output file: ${result.outputFile}`);

  } catch (err) {
    console.error('❌ Error in main:', err.message);
    console.error('Full error:', err);
  }
}

// Run if this file is executed directly
if (require.main === module) {
  main();
}

module.exports = CypherTimeConverter;
