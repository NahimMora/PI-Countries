const { Router } = require("express");
const router = Router();

const {postActivity, getActivity} = require("../handlers/activityHandlers")

router.post("/", postActivity);
router.get("/", getActivity)

module.exports = router;