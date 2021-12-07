const e = require('express')
const express = require('express')
 const router = require('./routes')
//   const { User} = require('./models')
const app = express()
// decodificacion larga archivos : corta 
//es extended true cuando queremos recibir archivos
app.use(express.urlencoded({extended:false}))//nos permite recibir archivos middlewarre 
// trabajar con  datos json
app.use(express.json())

app.use('/api/v1',router)

app.listen(3000,()=>{
    console.log("server on")
});