const express = require('express')
const router = express.Router()
const { User } = require('../models')

router.get('/', (req, res) => {
    res.send('bienvenido a mi pagina')// resmetodo get  peticion  pregunta ; req = es post  respuesta
});

router.post('/register', async (req, res) => {
    const newUser = new User(req.body)// req.body : llegan todos los datos 
    console.log(req)
    try {
        //si todo esta biesn guarda kos datos en user 
        const user = await newUser.save() // guarda los datos en la bd de datos  
        res.status(201).send(user)
    } catch (error) {
        console.log(error)
        res.status(409).send(error)
    }
});

router.post('/suma', (req, res) => {
    const num = req.body.num1
    const num2 = req.body.num2
    const suma = num + num2
    console.log(suma)

});

router.get('/users/:userid', (req, res) => {
    console.log(req.params.userid)
    if (req.params.userid == 2) {
        res.status(200).send('todo bin ')
        console.log(res.statusCode)

    } else {
        res.status(404)
        console.log(res.statusCode)
    }
});
router.get('/users/', (req, res) => {
    res.send(req.status(200).query)
});

module.exports = router