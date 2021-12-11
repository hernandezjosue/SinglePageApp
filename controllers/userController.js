const { save, findAll, findById, update, updateEmail, deleteUser } = require('../services/userServices')
module.exports = {

    create: async (req, res) => {
        try {
            const newUser = await save(req.body) //// req.body : llegan todos los datos // guarda los datos en la bd de datos  
            res.status(201).send(newUser)
        } catch (error) {
            res.status(409).send(error)

        }
    },
    getAll: async (_, res) => {
        try {
            const user = await findAll()
            res.status(200).send(user)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    getById: async (req, res) => {
        const id = req.params.userid
        try {
            const user = await findById(id)
            console.log(user)
            res.status(200).send(user)


        } catch (error) {
            res.status(404).send(error)
        }

    },
    update: async (req, res) => {
        const id = req.params.userid
        const newData = req.body

        try {
            const user = await findById(id)
            const updateUser = await update(user, newData)
            res.status(200).send(updateUser)
        } catch (error) {
            console.log(error)
            res.status(409).send(error)

        }

    },
    updateEmail: async (req, res) => {
        const id = req.params.userid
        const newEmail = req.body.email
        try {
            const user = await findById(id)
            const updateUserEmail = await updateEmail(user, newEmail)
            res.status(200).send(updateUserEmail)
        } catch (error) {
            res.status(409).send(error)

        }

    },
    delete: async (req, res) => {
        const id = req.params.userid
        try {
            const user = await findById(id)
            await deleteUser(user)
            res.status(200).send({ message: 'user was deleted' })
        } catch (error) {
            res.status(409).send(error)

        }

    }
}