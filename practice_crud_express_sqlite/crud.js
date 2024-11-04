const db = require("./database");

// Create a new item
const createItem = (name, description, callback) => {
  const sql = "INSERT INTO items (name, description) VALUES (?, ?)";
  db.run(sql, [name, description], function (err) {
    callback(err, {
      id: this.lastID,
    });
  });
};

// Read all items
const readItem = (callback) => {
  const sql = `SELECT * FROM items`;
  db.all(sql, [], callback);
};

// Update an item
const updateItem = (id, name, description, callback) => {
  const sql = "UPDATE items SET name = ?, description = ? WHERE id = ?";
  db.run(sql, [name, description, id], callback);
};

// Delete an item
const deleteItem = (id, callback) => {
  const sql = "DELETE FROM items WHERE id = ?";
  db.run(sql, id, callback);
};

module.exports = {
  createItem,
  readItem,
  updateItem,
  deleteItem,
};
