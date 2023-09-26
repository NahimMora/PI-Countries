const { Router } = require("express");
const router = Router();

const {getCountryId, detecting} = require("../handlers/countriesHandlers")

router.get("/", detecting);
router.get("/:id", getCountryId)

module.exports = router;
