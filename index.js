
const A_URI = process.env.AURAURI
const A_PASS = process.env.AURAPASSWORD
const A_USER = process.env.AURAUSER

var neo4j = require('neo4j-driver');

(async () => {

  // URI examples: 'neo4j://localhost', 'neo4j+s://xxx.databases.neo4j.io'
  const URI = A_URI;
  const USER = A_USER;
  const PASSWORD = A_PASS;

  let driver

  try {
    driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD))
    const serverInfo = await driver.getServerInfo()
    console.log('Connection established')
    console.log(serverInfo)



  } catch(err) {
    console.log(`Connection error\n${err}\nCause: ${err.cause}`)
  }
})();
