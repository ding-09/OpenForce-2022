const mongoose = require('mongoose');
const {Schema} = require('mongoose');


const specialAccess = new Schema(
    {
        id :{
            type:String,
            required:true
        }
    }
)


module.exports=mongoose.model('access',specialAccess);
