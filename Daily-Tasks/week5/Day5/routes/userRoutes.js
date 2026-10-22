const express = require("express");
const router = express.Router();

const userController = require(
    "../controllers/userController"
);

// GET all users
router.get("/", userController.getAllUsers);

// GET user by ID
router.get("/:id", userController.getUserById);

// POST create user
router.post("/", userController.createUser);

// Dynamic parameter endpoint
router.get("/:id/:section", (req, res) => {
    const { id, section } = req.params;

    res.json({
        userId: id,
        section: section
    });
});

module.exports = router;