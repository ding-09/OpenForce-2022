const mongoose = require('mongoose');
const {Schema} = require('mongoose');


const issueSchema = new Schema(
    {
        orgId:{
            type:String,
            required:true
        },   
        issue: {
            type: Schema.Types.Array,
            default:[]
        }
    }
)


module.exports=mongoose.model('issues',issueSchema);
