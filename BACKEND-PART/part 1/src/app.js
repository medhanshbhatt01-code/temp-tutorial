const express = require("express");
const app = express();
app.use(express.json());
const notes = [];
app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.status(201).json({
    message: "note created successfully",
  });
});
app.get("/notes", (req, res) => {
  res.status(200).json({
    notes: notes,
    message: "notes send successflly",
  });
});
app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete notes[index];
  res.status(200).json({
    message: "note deleted successfully",
  });
});
app.patch("/notes/:index", (req, res) => {
  const index = req.params.index;
  const description = req.body.description;
  notes[index].description = description;
  res.status(200).json({
    message: "notes updated succesfully",
  });
});
module.exports = app;

/* npx nodemon server.js or anyother name causes the server to restart on any change in the named 
file so we dont have to restart it again and again  */
