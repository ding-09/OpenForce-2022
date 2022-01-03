const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());
const port = 5000

const uri = process.env.MONGO_URI;

mongoose.connect(uri).then(() => {
    console.log("Connected")
}).catch((err) => {
    console.log(err);
});

app.use('/api/user/',require('./routes/user'))
app.use('/api/session/',require('./routes/session'))
app.use('/api/org/',require('./routes/organization'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})