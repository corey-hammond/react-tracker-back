const Material = require("../models/Material");
const seedData = require("./materialSeeds.json");

Material.deleteMany({})
  .then(() => {
    return Material.insertMany(seedData);
  })
  .then(() => {
    console.log("Materials seeded");
    process.exit();
  });
