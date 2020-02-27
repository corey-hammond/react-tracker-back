const express = require("express");
const router = express.Router();
const {
  getMaterials,
  addMaterial,
  deleteMaterial
} = require("../controllers/materials");

router
  .route("/")
  .get(getMaterials)
  .post(addMaterial);

router.route("/:id").delete(deleteMaterial);

module.exports = router;
