const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const fs = require('fs')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.get('/:filename', async (req, res) => {
    console.log(req.params.filename)
    let filepath = `images/${req.params.filename}`
    res.render('image', {filepath: filepath,layout: 'blank.handlebars'})
})
router.use((req, res) => {
    res.send('<h1>wrong route</h1>')
})



module.exports = router; 