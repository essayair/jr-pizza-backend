const express = require("express");
const routes = require("./routes");
require("dotenv").config();
const { connectToDB } = require("./utlis/db");

const app = express();

app.use(express.json());
app.use("/api/pizza", routes);

app.get("/", (req, res) => {
  res.json("hello");
});

connectToDB()
  .then(() => {
    app.listen(3000, () => {
      console.log("server listening at 3000");
    });
  })
  .catch(e => {
    coneole.log(e);
    process.exit(1);
  });
