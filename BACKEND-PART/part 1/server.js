const app = require("./src/app");

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.listen(3000, () => {
  console.log("server is running");
});
