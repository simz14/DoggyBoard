const express = require("express");
const { userController } = require("../controllers/userController");
const { dogController } = require("../controllers/dogController");
const { donationCotroller } = require("../controllers/donationController");
const { adoptionController } = require("../controllers/adoptionController");
const router = express.Router();

router.post("/login", userController.checkUser);
router.post("/newdog", dogController.addDog);
router.post("/newadoption", adoptionController.addAdoption);

router.put("/editdog", dogController.editDog);

router.delete("/removedog", dogController.removeDog);
router.delete("/removeadoption", adoptionController.removeAdoptions);

router.get("/dogs", dogController.getDogs);
router.get("/donations", donationCotroller.getDonations);
router.get("/adoptions", adoptionController.getAdoptions);

module.exports = router;
