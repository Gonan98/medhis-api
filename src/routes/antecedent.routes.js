const { Router } = require("express");
const { saveAntecedent, getAntecedentsByPatient } = require("../controllers/antecedent.controller");

const router = Router();

router.post('/', saveAntecedent);
router.get('/', getAntecedentsByPatient);

module.exports = router;