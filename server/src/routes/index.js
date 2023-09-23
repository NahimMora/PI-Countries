const { Router } = require("express");

const router = Router();

const routerCountries = require("./countries")
const routerActivity = require("./activity")

router.use("/countries", routerCountries)
router.use("/activities", routerActivity)

module.exports = router;
