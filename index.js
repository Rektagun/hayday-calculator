const express = require("express");
const neo4j = require("neo4j-driver");
const cors = require("cors");
const app = express();
require('dotenv').config()

app.use(cors());
app.use(express.json());

const itemDetails = null;

const getAllData = async () => {
  const NEO4J_URI = process.env.NEO4J_URI
  const NEO4J_USERNAME = process.env.NEO4J_USERNAME
  const NEO4J_PASSWORD = process.env.NEO4J_PASSWORD
  let driver;
  try {
    driver = neo4j.driver(NEO4J_URI, neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD));
    serverInfo = await driver.getServerInfo()
    if (serverInfo != null) {
      console.log('Connection established')
    }
    const result = await driver.executeQuery(
      // `MATCH (n:Item) WHERE n.level <= ${user_level} RETURN DISTINCT n`,
      `MATCH (n:Item) RETURN DISTINCT n`,
    );
    itemDetails = result.records.map((record) => {
      const node = record.get("n");
      return {
        id: node.identity.low,
        name: node.properties.name,
        maxPrice: node.properties.maxPrice.low,
        level: node.properties.level.low,
        type: node.properties.type,
        xp: node.properties.xp.low,
        imageUrl: node.properties.imageUrl,
      };
    });
    console.log(itemDetails);
  } catch (err) {
    console.log(`Connection error\n${err}\nCause: ${err.cause}`)
  }
}

getAllData();

app.get("/api/data", async (req, res) => {
  if (itemDetails) {
    res.json(itemDetails);
  }
  else {
    res.status(500).json({ error: 'Data not loaded yet...' })
  }
  // const user_level = req.body.value;
  // console.log(user_level)
});


app.listen(3001, () => {
  console.log("Server running on port 3001");
});

// Variables:
// 0. User's exp level in the game.
//    - Only show those items.
// 1. What items to fetch?
//    - Some other info about it?

// TODO [ RECIEVE DATA FROM FRONTEND ]
// TODO [ FIGURE OUT HOW I'LL HANDLE TWO THINGS AT ONCE, THE SNED ING OF LEVEL
// AND THE FETCHING OF DATA ]

// TODO [ CLEAN DATA AND MAKE IT USEFULL ]

// Que. What data to request?
// Ans. Ask the user for items needed and then get back with that info.
//    - Mostly everything in the database, but only required items.
//    - Remove stupid things from the results.
//    - Save that data nicely to send to the frontend.

// TODO [ SEND DATA TO FRONTEND ]
