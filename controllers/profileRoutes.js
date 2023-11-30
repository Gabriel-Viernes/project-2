const router = require('express').Router();
const { User, FileRef } = require('../models');
const withAuth = require('../utils/auth');

router.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password']},
            include: [{model: FileRef}],
        });

        const user = userData.get({plain: true});

        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch (error) {
        res.status(505).json(error);
    }
});

//Get all images and Join with user data

router.get('/images', async (req, res) => {
    try {
        const imageData = await FileRef.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
            ],
        });

        //Serialize data so the template can read
        
    } catch (error) {
        res.status(505).json(error);
    }
})

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login')
});

module.exports = router;