const { Router } = require("express");
const { saveHistory, getHistoriesByPatient } = require("../controllers/history.controller");

const router = Router();

router.post('/', saveHistory);
router.get('/', getHistoriesByPatient);

module.exports = router;