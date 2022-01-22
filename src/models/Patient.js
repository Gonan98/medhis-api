const { Schema, model } = require('mongoose');

const patientSchema = new Schema({
    medicalRecord: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dni: { type: String, required: true, unique: true },
    birthdate: { type: Date, required: true },
    location: {
        department: { type: String, required: true },
        city: { type: String, required: true },
        district: { type: String, required: true },
        address: { type: String, required: true }
    },
    gender: {
        type: String,
        enum: ['M', 'F'],
        required: true
    }
}, {
    timestamps: true
});

module.exports = model('Patient', patientSchema);