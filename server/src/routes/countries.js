const { Router } = require("express");
const router = Router();

const {getCountryId, detecting} = require("../handlers/countriesHandlers")

// router.get("/name", getCountriesName);
router.get("/", detecting);
router.get("/:id", getCountryId)



module.exports = router;
