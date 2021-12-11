const express = require('express')
const router = express.Router()
const { User } = require('../models')
const userController = require('../controllers/userController')
const postController = require('../controllers/postController')
router.get('/', (_, res) => {
    res.send('bienvenido a mi pagina')// resmetodo get  peticion  pregunta ; req = es post  respuesta
});


//USER ROUTE
router.post('/register',userController.create);
router.get('/users', userController.getAll);
router.get('/users/:userid',userController.getById);
router.put('/users/:userid',userController.update)
router.put('/users/post/:userid',userController.update)
router.patch('/users/:userid',userController.updateEmail)
router.delete('/users/:userid',userController.delete)
module.exports = router


//POST ROUTES 

router.post('/posts',postController.create)
router.get('/posts',postController.getAll)
router.get('/posts/:postid',postController.getById)
router.put('/posts/:postid',postController.update)
router.delete('/posts/:postid',postController.delete)




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