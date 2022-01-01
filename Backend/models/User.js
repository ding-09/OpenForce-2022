const mongoose = require('mongoose'); 
const {Schema} = require('mongoose');

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        sessionsBooked:{
            type: Array,
            default:[]
        },
        gender:{
            type:String,
            required:true
        },
        mobileNo : {
            type:String,
            required:true
        },
        college:{
            type:String,
            required:true
        }
    }
)
module.exports=mongoose.model('user',UserSchema);