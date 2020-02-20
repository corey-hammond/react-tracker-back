const express = require("express");
const parser = require("body-parser");
const cors = require("cors");

const materialsController = require("./controllers/materials");

const app = express();

app.use(cors());
app.use(parser.urlencoded({ extended: true }));

app.use("/materials", materialsController);

app.listen(5000, () => console.log("Running on port 5000"));
