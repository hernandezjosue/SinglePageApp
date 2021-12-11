const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    decrption: String,
    location: String,
    image: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
})

const Post = mongoose.model('post', postSchema)
module.exports = Post