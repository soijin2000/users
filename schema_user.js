const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newUserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    }
}, {timestamps:true})

const AddedNewUser = mongoose.model('db1', newUserSchema)

module.exports = AddedNewUser
