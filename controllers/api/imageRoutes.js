const router = require('express').Router();
const { v4: uuidv4 } = require('uuid')
const {FileRef, User} = require('../../models');

const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/')
    },
    filename: function (req, file, cb) {
        let id = uuidv4()
        let newFilename = id.slice(id.length-5, id.length)
        cb(null, `${newFilename}.png`)
    }
})
const upload = multer ({ storage: storage})
router.post('/', upload.single('upload'), async (req, res) => {
    try {
        res.send('File uploaded!')
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
})

async function writeFile(file) {
    fs.writeFile("../../public/images", file)
}

module.exports = router;