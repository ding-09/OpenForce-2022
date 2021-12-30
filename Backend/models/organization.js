const mongoose = require('mongoose');
const {Schema} = require('mongoose');


const organizationSchema = new Schema(
    {
        name:{
            type:String,
            required:true
        },
        email: {
            type:String,
            required:true
        },
        contact:{
            type:Number,
            required:true
        },
        logo: {
            type: String,
            default: "https://firebasestorage.googleapis.com/v0/b/openforce-2022.appspot.com/o/organization%2FdefaultLogo.png?alt=media&token=0d875c0b-30f1-4121-bb5f-c430a3beef58"
        }
    }
)


module.exports=mongoose.model('organization',organizationSchema);