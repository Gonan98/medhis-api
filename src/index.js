const mongoose = require('mongoose');
const app = require("./app");

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Database connected'))
    .catch((err) => console.error(err));

app.listen(port, () => {
    console.log('Server listening on port', port);
});