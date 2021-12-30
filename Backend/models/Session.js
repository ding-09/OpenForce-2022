const mongoose = require('mongoose')
const SessionSchema = mongoose.Schema({
    'organiser': Map,
    'description':String,
    'image':String,
    'time':Date
})
module.exports = mongoose.model('session',SessionSchema);