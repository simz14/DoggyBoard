const express = require("express");
const { userController } = require("../controllers/userController");
const { dogController } = require("../controllers/dogController");
const { donationCotroller } = require("../controllers/donationController");
const router = express.Router();

router.post("/login", userController.checkUser);
router.post("/newdog", dogController.addDog);

router.put("/editdog", dogController.editDog);

router.delete("/removedog", dogController.removeDog);

router.get("/dogs", dogController.getDogs);
router.get("/donations", donationCotroller.getDonations);

module.exports = router;
