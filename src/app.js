const express = require('express');
const routes = require('./routes');
const path = require('path');

const app = express();
const port = 3333;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (_req, res) => {
  res.render("index")
});

routes(app);

app.listen(port, () => console.log(`servidor rodando http://localhost:3333/`));

module.exports = app;