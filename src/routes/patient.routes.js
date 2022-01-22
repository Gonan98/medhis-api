const { Router } = require("express");
const { getAllPatients, savePatient, getPatientById, getPatientByDni } = require("../controllers/patient.controller");

const router = Router();

router.get('/', getAllPatients);
router.post('/', savePatient);
router.get('/:id', getPatientById);
router.get('/dni/:dni', getPatientByDni);

module.exports = router;