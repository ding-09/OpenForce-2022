const mongoose = require('mongoose');
const {Schema} = require('mongoose');


const user = new Schema(
    {
        user :{
            type:String,
            required:true
        },
        points:{
            type:Number,
            default :0
        },
        name:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model('user',user);
