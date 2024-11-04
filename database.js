const sqlite3 = require("sqlite3").verbose();

// database.js
const db = new sqlite3.Database("myDatabase.db", (err) => {
  if (err) {
    console.error("Database opening error:", err);
  } else {
    console.log("Connected to the database.");
    db.run(
      "CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT)",
      (err) => {
        if (err) {
          console.error("Table creation error:", err);
        } else {
          console.log("Table created successfully.");
        }
      }
    );
  }
});

module.exports = db; // Export the db object
