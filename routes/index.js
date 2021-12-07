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

router.get('/users/:userid',async (req, res) => {
    const id= req.params.userid
    try {
        const user = await User.findById(id)
        console.log(user)
        res.status(200).send(user)


    } catch (error) {
        res.status(404).send(error)
    }
});

router.get('/users',async (req, res) => {
    try {
        const user = await User.find()
        console.log(user)
        res.status(200).send(user)


    } catch (error) {
        res.status(404).send(error)
    }
});

router.put('/users/:userid',async(req,res)=>{
    const id = req.params.userid 
    const newData = req.body
    try {
        const updateUser = await User.findByIdAndUpdate(id,newData,{
            new:true,
        })
        res.status(200).send(updateUser)
    } catch (error) {
        res.status(409).send(error)
        
    }

})
router.patch('/users/:userid',async(req,res)=>{
    const id = req.params.userid 
    const newEmail = req.body.email
    try {
        const updateUser = await User.findByIdAndUpdate(id,
            {$set:{email:newEmail}},
            {
            new:true,
        })
        res.status(200).send(updateUser)
    } catch (error) {
        res.status(409).send(error)
        
    }

})
//delete fisico,debemos de evitar este tipo de delete
// router.delete('/users/:userid',async(req,res)=>{
//     const id = req.params.userid 
//     const newEmail = req.body.email
//     try {
//         await User.findByIdAndDelete(id)
//         res.status(200).send({message: "user was deleted"})
//     } catch (error) {
//         res.status(409).send(error)
        
//     }

// })
// delete logico 
router.delete('/users/:userid',async(req,res)=>{
    const id = req.params.userid 
    try {
         await User.findByIdAndUpdate(id,
            {$set:{isActive :false}},
            {
            new:true,
        })
        res.status(200).send({message: 'user was deleted'})
    } catch (error) {
        res.status(409).send(error)
        
    }

})
module.exports = router