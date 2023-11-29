const router = require('express').Router();
const {FileRef, User} = require('../../models');

router.post('/', async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
})

module.exports = router;