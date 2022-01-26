const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',extended:true}));
app.use(express.static(path.resolve(__dirname,'../build')))
const port = process.env.PORT || 5000

const uri = process.env.MONGO_URI || "mongodb+srv://openforce:Openforce123@cluster0.enooy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri).then(() => {
    console.log("Connected")
}).catch((err) => {
    console.log(err);
});


//serving webpages
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
})

app.get('/swags', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
})

app.get('/issue', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
})

app.get('/panel', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
})

//for api
app.use('/api/user/',require('./routes/user'))
app.use('/api/org/',require('./routes/organization'))


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})