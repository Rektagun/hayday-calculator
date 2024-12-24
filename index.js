
var neo4j = require('neo4j-driver');

(async () => {
  // URI examples: 'neo4j://localhost', 'neo4j+s://xxx.databases.neo4j.io'
  const URI = 'neo4j+s://afe81a2a.databases.neo4j.io'
  const USER = 'neo4j'
  const PASSWORD = 'VcKQNmXMCW3T2OR_-URhFumMDoFrQWxqnB1LkVfOHEc'
  let driver

  try {
    driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD))
    const serverInfo = await driver.getServerInfo()
    console.log('Connection established')
    console.log(serverInfo)


    const basicResult = await neo4j.session.run()



  } catch(err) {
    console.log(`Connection error\n${err}\nCause: ${err.cause}`)
  }
})();
