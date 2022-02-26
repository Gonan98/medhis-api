const { Schema, model } = require("mongoose");

const historySchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    pressure: { type: Number, required: true },
    temperature: { type: Number, required: true },
    anamnesis: String,
    patient: { type: Schema.Types.ObjectId, ref: 'Patient', required: true }
}, {
    timestamps: false
});

module.exports = model('History', historySchema);