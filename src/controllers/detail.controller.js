const Detail = require("../models/Detail");

const saveDetail = async (req, res) => {
    const {
        date,
        height,
        weight,
        pressure,
        temperature,
        anamnesis,
        age,
        patient
    } = req.body;

    console.log(req.body);

    try {
        await Detail.create({
            date,
            height,
            weight,
            pressure,
            temperature,
            anamnesis,
            age,
            patient
        });

        res.status(201).json({
            message: 'Detail added successfuly'
        });
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
}

/* const getAllDetails = async (req, res) => {
    try {
        const details = await Detail.find({ patient: req.params.id });

        res.status(200).json(details);
    } catch (error) {
        res.status(500).json(error);
    }
} */

const getDetailsByPatient = async (req, res) => {
    try {
        const details = await Detail.find({ patient: req.params.patientId });

        res.status(200).json(details);
    } catch (error) {
        res.status(500).json(error);
    }
}


/* const getLastDetail = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json(error);
    }
} */

module.exports = {
    saveDetail,
    getDetailsByPatient
}