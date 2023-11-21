const mongoose = require('mongoose')
const newMomentSchema = mongoose.Schema({
    title: {
        type: String,
        require: [true, 'Mandatory']
    },
    tag: {
        type: String,
        require: [true, 'Mandatory']
    },
    path: {
        type: String,
        require: [true, 'Mandatory']
    }
    
}, {
    timestamps: true
})

module.exports = mongoose.model('moment',newMomentSchema)