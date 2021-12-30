const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
const port = 5000

const uri = "mongodb+srv://openforce:Openforce123@cluster0.enooy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri).then(() => {
    console.log("Connected")
}).catch((err) => {
    console.log(err);
});

app.use('/api/session/',require('./routes/session'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

//mongodb+srv://openforce:Openforce123@cluster0.enooy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority