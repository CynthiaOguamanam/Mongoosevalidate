const mongoose = require ('mongoose')

const newSchema = mongoose.Schema({
    name:{
        type: String,
        // required: true
    },
    course:{
        type: String,
        // required: true
    },
    institution: {
        type: String,
        // required: true
    },
    married: {
        type: Boolean
    }
}, {timestaps: true})

module.exports = mongoose.model('user', newSchema);