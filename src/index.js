require('dotenv').config();
const mongoose = require('mongoose');
const app = require("./app");
 
if (process.env.NODE_ENV === 'production') {
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log('Database is connected'))
        .catch(console.error);
} else {
    mongoose.connect('mongodb://localhost/medicaldb')
    .then(() => console.log('Database is connected'))
    .catch(console.error);
}

const port = process.env.PORT || 5000;

app.listen(port , () => {
    console.log('Server listening on port', port);
});