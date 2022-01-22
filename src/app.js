const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

const patientRoutes = require('./routes/patient.routes');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/patients', patientRoutes);

module.exports = app;