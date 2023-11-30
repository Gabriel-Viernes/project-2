const router = require('express').Router();
const { User, FileRef } = require('../models');
const withAuth = require('../utils/auth');

// Login
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                email: req.body.username,
            }
        });

        if (!dbUserData) {
            res.status(400).json({message: 'Incorrect email or passowrd. Please try again!'});
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({message: 'Incorrect email or passowrd. Please try again!'});
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            console.log('File: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie', req.session.cookie);

            res.status(200).json({user: dbUserData, message: 'You are now logged in!'})
        });

    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

//Get all images and Join with user data


//Check if user is already logged in
router.get('/login', (req, res) => {
    //If the user is already logged in, redirect the request to another route
    If (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router; 