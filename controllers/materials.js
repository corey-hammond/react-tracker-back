const Material = require("../models/Material");

// *** REST FUNCTIONS *** //

// @desc Get all materials
// @route GET /api/materials
// @access Public
exports.getMaterials = async (req, res, next) => {
  try {
    const materials = await Material.find();

    return res.status(200).json({
      success: true,
      count: materials.length,
      data: materials
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error"
    });
  }
};

// @desc Add material
// @route POST /api/materials
// @access Public
exports.addMaterial = async (req, res, next) => {
  try {
    const { name, url } = req.body;

    const material = await Material.create(req.body);

    return res.status(201).json({
      success: true,
      data: material
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(value => value.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error"
      });
    }
  }
};

// @desc Delete material
// @route DELETE /api/materials/:id
// @access Public
exports.deleteMaterial = async (req, res, next) => {
  try {
    const material = await Material.findById(req.params.id);

    if (!material) {
      return res.status(404).json({
        success: false,
        error: "No material found"
      });
    }

    await material.remove();

    return res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error"
    });
  }
};
