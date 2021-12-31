const mongoose = require('mongoose')
const SessionSchema = mongoose.Schema({
    'organiser': Map,
    'description':String,
    'image':String,
    'time':Date,
    'seatsAvailable':{
        type:Number,
        default: 300
    },
    'rsvps':Array
})
module.exports = mongoose.model('session',SessionSchema);