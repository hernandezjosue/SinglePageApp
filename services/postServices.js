const { Post } = require('../models')

module.exports = {
    save: (body) => { new Post(body).save() },
    findAll: () => { Post.find() },
    findById: (id) => { Post.findById(id) },
    update: (post, newPost) => {
        postUpdated = Object.assign(post, newPost)
        return postUpdated.save();
    },
    deletePost: (post) => {
        user.isActive = false
        return post.save();
    },


}