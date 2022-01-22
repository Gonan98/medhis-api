const mongoose = require('mongoose');
const app = require("./app");

mongoose.connect('mongodb://localhost/medicaldb')
    .then(() => console.log('Database is connected'))
    .catch(console.error);

app.listen(5000, () => {
    console.log('Server listening on port 5000');
});