const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');


router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use((req, res) => {
    res.send('<h1>wrong route</h1>')
})



module.exports = router; 