const Patient = require('../models/Patient');

const savePatient = async (req, res) => {
    const {
        recordNumber,
        firstName,
        lastName,
        documentNumber,
        birthdate,
        department,
        province,
        district,
        address,
        gender
    } = req.body;

    try {
        const newPatient = new Patient({
            recordNumber,
            firstName,
            lastName,
            documentNumber,
            birthdate,
            location: {
                department,
                province,
                district,
                address
            },
            gender
        });

        await newPatient.save();

        res.status(201).json({
            message: 'Patient registered successfuly'
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

const getAllPatients = async (req, res) => {

    try {
        const patients = await Patient.find({});
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

const getPatientByDocumentNumber = async (req, res) => {
    try {
        const patient = await Patient.findOne({ documentNumber: req.params.dni });
        if (!patient) return res.status(404).json({ message: 'Patient not found' });

        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    savePatient,
    getAllPatients,
    getPatientByDocumentNumber,
    getPatientById
}