const { Schema, model } = require("mongoose");

const historySchema = new Schema({
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    pressure: { type: Number, required: true },
    temperature: { type: Number, required: true },
    anamnesis: { type: String, required: true },
    patient: { type: Schema.Types.ObjectId, ref: 'Patient', required: true }
}, {
    timestamps: true
});

module.exports = model('History', historySchema);