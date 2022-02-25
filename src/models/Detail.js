const { Schema, model } = require("mongoose");

const detailSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    pressure: { type: Number, required: true },
    temperature: { type: Number, required: true },
    anamnesis: { type: String, required: true },
    age: { type: Number, required: true },
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    }
}, {
    timestamps: false
});

module.exports = model('Detail', detailSchema);