const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const database = require("./database/config");
app.use(bodyParser.json());

require('./routes/route.js')(app);

app.get("/", (req, res) => {
  console.log("Hello, This is node");
  res.send({ text: "Welcome to node.js" });
});
app.post("/bootcamp", (req, res) => {
  console.log(req.body);
  res.send({ session: `Bootcamp session:${req.body.year}` });
});

app.post("/resume", (req, res) => {
  console.log(req.body);
  res.send({ name: `${req.body.name}`, course: `${req.body.course}` });
});

app.listen(3000, () => {
  console.log("Listening port 3000");
});
