const express = require('express')

const app = express()
// decodificacion larga archivos : corta 
//es extended true cuando queremos recibir archivos
app.use(express.urlencoded({extended:false}))//nos permite recibir archivos middlewarre 
// trabajar con  datos json
app.use(express.json())

app.get('/api/v1',(req,res)=>{
    res.send('bienvenido a mi pagina')//metodo get  ; req = es post 
})

app.post('/api/v1/register',(req,res)=>{
    console.log(req.body) //tipo post req

})

app.listen(3000,()=>{
    console.log("server on")
})