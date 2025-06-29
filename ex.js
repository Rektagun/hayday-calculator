const express = require("express");
const neo4j = require("neo4j-driver");
const cors = require("cors");
const axios = require('axios').default;
const app = express();
require('dotenv').config()
app.use(cors());
app.use(express.json());

let results = null;

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
    console.log(`Getting data from database for query: ${user_level}`)

    results = await driver.executeQuery(`${user_level}`);

    let records = results.records;
    records.forEach((currentItem) => {
      let currentObj = currentItem._fields;
      currentObj.forEach((currentProperty) => {
        let startProperties = currentProperty.start;
        let endProperties = currentProperty.end;
        let segments = currentProperty.segments.forEach((segmentProperty) => {
          let segmentStart = segmentProperty.start;
          let segmentEnd = segmentProperty.end;
          let segmentRelationship = segmentProperty.relationship;
          console.log("segmentStart:===============================")
          console.log(segmentStart)
          console.log("segmentRelationship:===============================")
          console.log(segmentRelationship)
          console.log("segmentEnd:===============================")
          console.log(segmentEnd)
          console.log("==================================================")
        });
      })
    })
    res.json({ data: records });

  } catch (err) { console.log(`Connection error\n${err}\nCause: ${err.cause}`) }
})

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
