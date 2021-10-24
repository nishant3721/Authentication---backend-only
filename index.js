const express = require("express");
var path = require("path");

const connectToMongo = require("./db");
connectToMongo();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/auth", require("./routes/auth"));

app.listen(port, () => {
  console.log(`This project can be listen at http://localhost:${port}`);
});
