const mongoose = require('mongoose');
const UserScheme = mongoose.Schema(
    {
        firstname: {
            type: String,
            require: [true, 'Please Enter first name']
        },
        lastname: {
            type: String,
            require: [true, 'Please Enter last name']
        },
        fullname: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        phone: {
            type: String,
            require: false
        },
        password: {
            type: String,
            require: true
        },
        timestamps: {
            type: Date,
            default: Date.now
        }

    },
    {
        timestamps: true,
        get: time => time.toDateString()
    }
)
const User = mongoose.model('User', UserScheme);
module.exports = User;