const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://openforce:Openforce123@cluster0.enooy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri).then(() => {
    console.log("Connected")
}).catch((err) => {
    console.log(err);
});

app.listen(5000,()=>{
    console.log("Listing to port " + 5000);
})

//mongodb+srv://openforce:Openforce123@cluster0.enooy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority