const { Schema, model } = require("mongoose");

const antecedentSchema = new Schema({
    type: {
        type: String,
        enum: ['EXAMENES','FAMILIARES','MEDICAMENTOS'],
        required: true
    },
    examinationDate: Date,
    detail: {
        type: String,
        required: true,
        unique: true
    },
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    }
}, {
    timestamps: false
});

module.exports = model('Antecedent', antecedentSchema);