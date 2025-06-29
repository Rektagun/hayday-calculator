const express = require("express");
const neo4j = require("neo4j-driver");
const cors = require("cors");
const axios = require('axios').default;
const app = express();
require('dotenv').config()
app.use(cors());
app.use(express.json());

app.get('/api/data', async (req, res) => {

  const NEO4J_URI = process.env.NEO4J_URI
  const NEO4J_USERNAME = process.env.NEO4J_USERNAME
  const NEO4J_PASSWORD = process.env.NEO4J_PASSWORD
  let driver

  try {
    const user_level = req.query.level;
    driver = neo4j.driver(NEO4J_URI, neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD))
    const serverInfo = await driver.getServerInfo()

    console.log('Connection established...')
    console.log(serverInfo)
    console.log(`Getting data from database for user_level: ${user_level}`)

    // results = await driver.executeQuery(`MATCH p=(n:Item)-[]->() WHERE n.level <= ${user_level} RETURN DISTINCT p;`);
    let itemResults = await driver.executeQuery(`MATCH p=(n:Item)-[:PRODUCED_IN]->() WHERE n.level <= ${user_level} RETURN p;`);
    let recepieResults = await driver.executeQuery(`MATCH p=(n:Item)-[:REQUIRES]->(:Item) Where n.level <= ${user_level} RETURN p;`);
    if (itemResults && recepieResults) {
      console.log("Got data from database for user level: ", user_level);
    }

    let itemDetails = [];
    let allRecipes = [];

    // Process items
    itemResults.records.forEach((itemResultsItem) => {
      itemResultsItem._fields.forEach((forEachField) => {
        let productionLocation = forEachField.end.properties.name;
        forEachField.segments.forEach((forEachSegment) => {
          let name = forEachSegment.start.properties.name;
          let xp = forEachSegment.start.properties.xp.low;
          let level = forEachSegment.start.properties.level.low;
          let imageUrl = forEachSegment.start.properties.imageUrl;
          let maxPrice = forEachSegment.start.properties.maxPrice.low;
          let productionTime = forEachSegment.start.properties.productionTime.low;
          itemDetails.push({
            name, xp, level, imageUrl, maxPrice, productionTime, productionLocation, productionLocation,
          })
        })
      })
    })

    // Process recipes
    recepieResults.records.forEach((eachRecipe) => {
      eachRecipe._fields.forEach((forEachRecipe) => {
        forEachRecipe.segments.forEach((inSegment) => {
          let imageUrl = inSegment.end.properties.imageUrl;
          let itemName = inSegment.start.properties.name;
          let requireCount = inSegment.relationship.properties.amount.low;
          let requireName = inSegment.end.properties.name;
          allRecipes.push(
            { itemName, requireCount, requireName, imageUrl }
          )
        })
      })
    })

    console.log("Sent to Client")
    res.json({ Items: itemDetails, Recipes: allRecipes }); // Send all data to frontend
  } catch (err) { console.log(`Connection error\n${err}\nCause: ${err.cause}`) }
})

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
