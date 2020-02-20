const express = require("express")
const router = express.Router()

const Material = require("../models/Material")

router.get("/", (req, res) => {
    Material.find({}).then(materials => {
        res.json(materials)
    })
})

module.exports = router;