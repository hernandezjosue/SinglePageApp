const { User } = require('../models')

module.exports = {
    save: (body) => new User(body).save(),
    findAll: () => User.find( {isActive : true} ),
    findById: (id) => User.findById(id),
    update: (user, newData) => {
        userUpdated = Object.assign(user, newData)
        return userUpdated.save();
    },
    updateEmail: (user, newEmail) => {
        user.email = newEmail
        return user.save();
    },
    deleteUser:(user) => {
        user.isActive = false
        return user.save();
    },

}

