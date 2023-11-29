const router = require('express').Router();
const {FileRef, User} = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password
        })
        req.session.save(() => {
            req.session.userId = newUser.id;
            req.session.username = newUser.username;
            req.session.loggedIn = true;
            res.json(newUser)
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/login', async (req, res) => {
    try {
        const existingUser = await User.findOne({
            where: {username: req.body.username}
        })
        if (!existingUser) {
            res.status(404).json({message: "invalid username"})
        }
        const validPW = existingUser.checkPassword(req.body.password)
        if (!validPW) {
            res.status(404).json({message: "invalid password"})
        }
        req.session.save(() => {
            req.session.userId = existingUser.id
            req.session.username = existingUser.username
            req.session.loggedIn = true
            res.json({existingUser, message: 'You are logged in!'})
        })
    } catch (error) {
        console.error(error)
        res.status(500).json(error) 
    }
})

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end()
        })
    } else {
        res.status(404).end()
    }
})

router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll()
        res.json(userData)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router; 