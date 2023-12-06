const router = require('express').Router();
const { User, FileRef } = require('../models');
const withAuth = require('../utils/auth');

//
router.get('/', withAuth, async (req, res) => {
    try {
        const imageData = await FileRef.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
            ],
        });
        
        const images = imageData.map((image) => image.get({
            plain: true
        }))
        console.log(images) 
        res.render('home', {images: images})
      
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
})





//Check if user is already logged in
router.get('/login', (req, res) => {
    //If the user is already logged in, redirect the request to another route
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router; 