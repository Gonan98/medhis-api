const Patient = require('../models/Patient');

const savePatient = async (req, res) => {
    const {
        medicalRecord,
        firstName,
        lastName,
        dni,
        birthdate,
        location,
        gender
    } = req.body;

    try {
        await Patient.create({
            medicalRecord,
            firstName,
            lastName,
            dni,
            birthdate,
            location,
            gender
        });
        res.status(201).json({
            message: 'Patient registered successfuly'
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

const getAllPatients = async (req, res) => {

    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) return res.status(404).json({ message: 'Patient not found' });

        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getPatientByDni = async (req, res) => {
    try {
        const patient = await Patient.findOne({ dni: req.params.dni });
		if (!patient) return res.status(404).json({ message: 'Patient not found' });
		
        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    savePatient,
    getAllPatients,
    getPatientByDni,
    getPatientById
}