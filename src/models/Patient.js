const { Schema, model } = require('mongoose');

const patientSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    documentNumber: { type: String, required: true, unique: true },
    birthdate: { type: Date, required: true },
    location: {
        department: { type: String, required: true },
        province: { type: String, required: true },
        district: { type: String, required: true },
        address: { type: String, required: true }
    },
    gender: {
        type: String,
        enum: ['M', 'F'],
        required: true
    },
    histories: [{ type: Schema.Types.ObjectId, ref: 'History' }]
}, {
    timestamps: false
});

module.exports = model('Patient', patientSchema);