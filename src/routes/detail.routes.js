const { Router } = require("express");
const { saveDetail, getDetailsByPatient } = require("../controllers/detail.controller");

const router = Router();

router.post('/', saveDetail);
router.get('/patient/:patientId', getDetailsByPatient);

module.exports = router;