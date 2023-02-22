const express = require("express");
const router = express.Router();

const { loginController, signupController, profileController } = require("../controllers/users.controller");

router.post("/login", loginController);
router.post("/signup", signupController);
router.get("/profile/:username", profileController);

module.exports = router;
