const express = require("express");
const { createItem, readItem, updateItem, deleteItem } = require("./crud");
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

app.get("/items", (req, res) => {
    readItem((err, items) => {
      if (err) {
        console.error("Error fetching items:", err);
        res.status(500).send("Internal Server Error");
      } else {
        res.status(200).json(items);
      }
    });
  });
  

app.post("/items", (req, res) => {
  const { name, description } = req.body;
  createItem(name, description, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(201).send(`Item created with id ${data.id}`);
    }
  });
});

app.put("/items/:id", (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  updateItem(id, name, description, (err) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).send(`Item with id ${id} updated successfully`);
    }
  });
});

app.delete("/items/:id", (req, res) => {
  const { id } = req.params;
  deleteItem(id, (err) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).send(`Item with id ${id} deleted successfully`);
    }
  });
});
