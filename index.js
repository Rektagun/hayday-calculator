const express = require("express");
const neo4j = require("neo4j-driver");
const cors = require("cors");
const axios = require('axios').default;
const app = express();
require('dotenv').config()
app.use(cors());
app.use(express.json());

let queryData = null;
let records = null;

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
    // queryData = await driver.executeQuery(`MATCH p=(n:Item)-[]->() WHERE n.name = "Corn" RETURN p;`);
    queryData = await driver.executeQuery(`MATCH p=(n:Item)-[]->() WHERE n.level <= ${user_level} RETURN DISTINCT p;`);
    if (queryData) {
      console.log('Got data')
      console.log(queryData)
      res.json({ data: queryData });
    }

  } catch (err) {
    console.log(`Connection error\n${err}\nCause: ${err.cause}`)
  }
})

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
