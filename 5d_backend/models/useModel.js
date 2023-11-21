const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    fname: {
        type: String,
        require: [true, 'Mandatory']
    },
    lname: {
        type: String,
        require: [true, 'Mandatory']
    },
    email: {
        type: String,
        require: [true, 'Mandatory']
    },
    city: {
        type: String,
        require: [true, 'Mandatory']
    },
    mobile: {
        type: String,
        require: [true, 'Mandatory']
    },
    password: {
        type: String,
        require: [true, 'Mandatory']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('user',userSchema)