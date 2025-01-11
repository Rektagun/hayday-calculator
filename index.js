var neo4j = require('neo4j-driver');

(async () => {

  const URI='neo4j+s://afe81a2a.databases.neo4j.io'
  const USER='neo4j'
  const PASSWORD='VcKQNmXMCW3T2OR_-URhFumMDoFrQWxqnB1LkVfOHEc'

  let driver

  try {

    driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD))
    console.log(await driver.executeQuery('MATCH (n) RETURN n LIMIT 1'));

    const user_level = 5;

    // Variables:
    // 0. User's exp level in the game.
    //    - Only show those items.
    // 1. What items to fetch?
    //    - Some other info about it?
    
    // TODO [ RECIEVE DATA FROM FRONTEND ]

    // TODO [ CLEAN DATA AND MAKE IT USEFULL ]

    // Que. What data to request?
    // Ans. Ask the user for items needed and then get back with that info.
    //    - Mostly everything in the database, but only required items.
    //    - Remove stupid things from the results.
    //    - Save that data nicely to send to the frontend.

    // TODO [ SEND DATA TO FRONTEND ]

    driver.close();

  } catch(err) {
    console.log(`Connection error\n${err}\nCause: ${err.cause}`)
  }
})();
