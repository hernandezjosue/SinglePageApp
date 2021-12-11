
const { save,
    findAll,
    findById,
    update,
    deletePost

} = require("../services/postServices")
const { getById } = require("./userController")


module.exports = {
    create: async (req, res) => {
        try {
            console.log(req.body)
            const newPost = save(req.body)
            res.status(200).send(newPost)
        } catch (error) {
            res.status(409).send(error)
        }

    },
    getAll: async (_, res) => {
        try {
            const posts = await findAll()
            res.status(201).send(posts)
        } catch (error) {
            res.status(409).send(error)
        }
    },
    getById: async (req, res) => {
        const postId = req.params.postid

        try {
            const post = getById(postId)
            res.status(201).send(post)
        } catch (error) {
            res.status(409).send(error)
        }
    },
    update: async (req, res) => {
        const postId = req.params.postid
        const postNew = req.body
        try {
            const userPost = await findById(postId)
            const postUpdated = await update(userPost, postNew)
            res.status(201).send(postUpdated)
        } catch (error) {
            res.status(409).send(error)

        }
    },
    delete: async (req, res) => {
        const postId = req.params.postid

        try {
            const post = await findById(postId)
            await deletePost(post)
            res.status(201).send({ message: 'post was delated' })
        } catch (error) {
            res.status(404).send(error)

        }
    }
}