const mongosee= require('mongoose')

const userSchema = new mongosee.Schema({
    name : String,
    lastName : String,
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
});

const User = mongosee.model('User', userSchema)

module.exports = User