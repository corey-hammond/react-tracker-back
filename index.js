const express = require("express");
const materialsController = require("./controllers/materials")

const app = express();

app.use("/materials", materialsController);

app.listen(3000, () => console.log("Running on port 3000"));
