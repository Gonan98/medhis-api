require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const patientRoutes = require('./routes/patient.routes');
const historyRoutes = require('./routes/history.routes');
const antecedentRoutes = require('./routes/antecedent.routes');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/patients', patientRoutes);
app.use('/api/v1/histories', historyRoutes);
app.use('/api/v1/antecedents', antecedentRoutes);

module.exports = app;