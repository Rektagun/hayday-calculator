const Database = require('better-sqlite3');
const path = require('path');

// Initialize database
const db = new Database(path.join(__dirname, 'allItems.db'), {
  verbose: console.log
});

const initDb = () => {
  db.exec(`
CREATE TABLE IF NOT EXISTS allItems (
id INTEGER PRIMARY KEY AUTOINCREMENT,
itemName TEXT NOT NULL,
icon TEXT,
ingredients INTEGER,
);
`);
  db.exec(`
CREATE TABLE IF NOT EXISTS ingredients (
id INTEGER PRIMARY KEY AUTOINCREMENT,
ingredientName TEXT NOT NULL,
icon TEXT,
);
`);
  db.exec(`
CREATE TABLE IF NOT EXISTS orderedItems (
id INTEGER PRIMARY KEY AUTOINCREMENT,
itemName TEXT NOT NULL,
icon TEXT,
count INTEGER,
);
`);
};

