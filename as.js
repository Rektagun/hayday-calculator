const express = require("express");
const neo4j = require("neo4j-driver");
const cors = require("cors");
const axios = require('axios').default;
const app = express();
require('dotenv').config()
app.use(cors());
app.use(express.json());

let queryData = null;

(async () => {
  const NEO4J_URI = process.env.NEO4J_URI
  const NEO4J_USERNAME = process.env.NEO4J_USERNAME
  const NEO4J_PASSWORD = process.env.NEO4J_PASSWORD
  let driver

  try {
    driver = neo4j.driver(NEO4J_URI, neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD))
    const serverInfo = await driver.getServerInfo()
    console.log('Connection established...')
    console.log(serverInfo)
    console.log('Getting data from database...')
    queryData = await driver.executeQuery('MATCH n=(p:Item)-[]-() WHERE p.level < 20 RETURN DISTINCT n;');
    if (queryData) {
      console.log('Got data from database...');
      console.log(queryData)
    }
  } catch (err) {
    console.log(`Connection error\n${err}\nCause: ${err.cause}`)
  }
})();


// for (let record of queryData.records) {
//   let node = record.get('n');
//   console.log(`Node ID: ${node.identity}`);
//   for (const [key, value] of Object.entries(node.properties)) {
//     console.log(`  ${key}: ${value}`);
//   }
//   console.log('-----------------------------');
// }

// recordsData = queryData.records.map((record) => {
//   const node = record.get("p");
//   return {
//     id: node.identity.low,
//     name: node.properties.name,
//     maxPrice: node.properties.maxPrice.low,
//     level: node.properties.level.low,
//     // type: node.properties.type,
//     xp: node.properties.xp.low,
//     imageUrl: node.properties.imageUrl,
//   };
// });
// console.log(recordsData);

// const retrieveData = async () => {
//   const NEO4J_URI = process.env.NEO4J_URI
//   const NEO4J_USERNAME = process.env.NEO4J_USERNAME
//   const NEO4J_PASSWORD = process.env.NEO4J_PASSWORD
//   let driver
//
//   try {
//     driver = neo4j.driver(NEO4J_URI, neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD))
//     const serverInfo = await driver.getServerInfo()
//     console.log('Connection established...')
//     console.log(serverInfo)
//     console.log('Getting data from database...')
//     results = await driver.executeQuery('MATCH allItems=()-[]-() RETURN DISTINCT allItems;')
//     if (results) {
//       console.log('Got data from database...');
//     }
//   } catch (err) {
//     console.log(`Connection error\n${err}\nCause: ${err.cause}`)
//   }
// }


// Wjrking example of data back and forth.
// app.get('/api/weather', async (req, res) => {
//   try {
//     // req.query contains query parameters from the frontend request
//     const city = req.query.city;
//     console.log('Getting weather for:', city);
//
//     res.json({ message: "Asked for number", city: city });
//   } catch (error) {
//     console.error('Weather API error:', error);
//     res.status(500).json({ error: 'Failed to fetch weather data' });
//   }
// });

// itemDetails = results.records.map((record) => {
//   const node = record.get("p");
//   return {
//     // id: node.identity.low,
//     name: node.properties.name,
//     maxPrice: node.properties.maxPrice.low,
//     level: node.properties.level.low,
//     // type: node.properties.type,
//     xp: node.properties.xp.low,
//     imageUrl: node.properties.imageUrl,
//   };
// });

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
