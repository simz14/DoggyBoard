const express = require("express");
const { userController } = require("../controllers/userController");
const { dogController } = require("../controllers/dogController");
const router = express.Router();

router.post("/login", userController.checkUser);
router.post("/newdog", dogController.addDog);
router.put("/editdog", dogController.editDog);

router.delete("/removedog", dogController.removeDog);

router.get("/dogs", dogController.getDogs);

module.exports = router;
