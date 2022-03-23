const Antecedent = require("../models/Antecedent");
const Patient = require("../models/Patient");

const saveAntecedent = async (req, res) => {
    const { type, detail, examinationDate, patient } = req.body;

    if (!type || !detail || !patient) {
        return res.status(400).json({
            message: 'Missing data'
        });
    }

    if (type === 'EXAMENES' && !examinationDate) {
        return res.status(400).json({
            message: 'Es necesario especificar una fecha para el tipo EXAMEN'
        });
    }

    try {
        const newAntecedent = new Antecedent({
            type,
            detail,
            examinationDate,
            patient
        });

        await newAntecedent.save();
        await Patient.findByIdAndUpdate(patient, {
            $push: {
                antecedents: newAntecedent
            }
        });

        res.status(201).json({
            message: 'Antecedent saved successfuly'
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

const getAntecedentsByPatient = async (req, res) => {
    const qPatientId = req.query.patient;

    if (!qPatientId) return res.status(400).json({ message: 'Query parameter <patient> is missing' });

    try {
        const antecedents = await Antecedent.find({ patient: qPatientId });

        res.status(200).json(antecedents);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    saveAntecedent,
    getAntecedentsByPatient
}