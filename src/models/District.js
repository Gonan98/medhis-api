const { Schema, model } = require('mongoose');

const departmentSchema = new Schema({
    departmentName: {
        type: String,
        required: true
    }
}, {
    timestamps: false
});

module.exports = model('Department', departmentSchema);