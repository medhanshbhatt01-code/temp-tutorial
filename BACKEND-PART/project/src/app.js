const express = require("express");
const multer = require("multer");
const uploadfile = require("../services/storage.service");
const postmodel = require("../models/post.model");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
  console.log(req.body);
  const result = await uploadfile(req.file.buffer);
  console.log(result);
  console.log(result.url);
  const post = await postmodel.create({
    image: result.url,

    caption: req.body.caption,
  });
  return res.status(201).json({
    Message: "post created successfully",
    post,
  });
});

app.get("/posts", async (req, res) => {
  const posts = await postmodel.find();

  return res.status(200).json({
    message: "post fetched succesfully",
    posts,
  });
});

app.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const post = await postmodel.findByIdAndDelete(id);
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  return res.status(200).json({ message: "Post deleted successfully", post });
});
module.exports = app;
