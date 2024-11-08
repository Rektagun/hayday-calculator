const { config } = require('dotenv');

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, MERN!');
});
