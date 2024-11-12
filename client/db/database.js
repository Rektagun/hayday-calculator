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
name TEXT NOT NULL,
prep_time INTEGER,
time INTEGER,
type TEXT NOT NULL,
ingredient BOOL,
price INTEGER,
icon TEXT,
);
`);


  db.exec(`
CREATE TABLE IF NOT EXISTS ingredients (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL,
prep_time INTEGER,
time INTEGER,
type TEXT NOT NULL,
ingredient BOOL,
price INTEGER,
icon TEXT,
);
`);


  db.exec(`
CREATE TABLE IF NOT EXISTS orderedItems (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL,
prep_time INTEGER,
time INTEGER,
type TEXT NOT NULL,
ingredient BOOL,
price INTEGER,
icon TEXT,
count INTEGER,
);
`);

};

const db_Operations = {

  createProduct: (allItems, ingredients) => {
    const insertProduct = db.prepare(`
INSERT INTO allItems (
name, prep_time, time, type, ingredient, price, icon)
) VALUES ()
`)
  }

};

