const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String ,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String
},{
    timestamps: true
})

// pass user schema in usermodel
const userModel = mongoose.model("user",userSchema )
module.exports =userModel