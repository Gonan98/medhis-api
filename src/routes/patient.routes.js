const { Router } = require("express");
const { getAllPatients, savePatient, getPatientById, getPatientByDocumentNumber } = require("../controllers/patient.controller");

const router = Router();

router.get('/', getAllPatients);
router.post('/', savePatient);
router.get('/:id', getPatientById);
router.get('/document/:dni', getPatientByDocumentNumber);

module.exports = router;