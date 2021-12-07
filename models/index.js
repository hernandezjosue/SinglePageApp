const mongoose = require('mongoose')
 const MONGO_URL = 'mongodb+srv://josue:nf9ckpg@cluster0.p3uv0.mongodb.net/Master?retryWrites=true&w=majority'
 const User = require('./User') //traemos modelo

mongoose.connect(MONGO_URL,(error)=>{
    error ? console.log(error) : console.log('database connected')
})

// conexion exportralo como obj
module.exports ={
    User,
}