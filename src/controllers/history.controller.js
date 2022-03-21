const History = require("../models/History");
const Patient = require("../models/Patient");

const saveHistory = async (req, res) => {
    const {
        height,
        weight,
        pressure,
        temperature,
        anamnesis,
        patient
    } = req.body;

    if (!height || !weight || !pressure || !temperature || !anamnesis || !patient) {
        return res.status(400).json({
            message: 'Missing data'
        });
    }

    try {
        const newHistory = new History({
            height,
            weight,
            pressure,
            temperature,
            anamnesis,
            patient
        });

        await newHistory.save();
        await Patient.findByIdAndUpdate(patient, {
            $push: {
                histories: newHistory
            }
        });

        res.status(201).json({
            message: 'History added successfuly'
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

const getHistoriesByPatient = async (req, res) => {

    const qPatientId = req.query.patient;

    if (!qPatientId) return res.status(400).json({ message: 'Query parameter <patient> is missing' });

    try {
        const histories = await History.find({ patient: qPatientId });

        res.status(200).json(histories);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    saveHistory,
    getHistoriesByPatient
}