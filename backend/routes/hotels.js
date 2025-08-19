const express = require("express");
const { addHotel } = require("../controllers/hotelsController");
const router = express.Router();

router.post("/onboard", addHotel);

module.exports = router;