const express = require("express");
const { userController } = require("../controllers/userController");
const router = express.Router();

router.post("/test", userController.checkUser);

module.exports = router;
