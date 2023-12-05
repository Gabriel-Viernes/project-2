const router = require('express').Router();
const { v4: uuidv4 } = require('uuid')
const mimeResolve = require('../../utils/fileExt.js')
const {FileRef, User} = require('../../models');

const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/')
    },
    filename: function (req, file, cb) {
        let id = uuidv4()
        let newFilename = id.slice(id.length-5, id.length)
        let ext = mimeResolve(file.mimetype)
        req.uuid = id
        cb(null, `${newFilename}${ext}`)
    }
})
const upload = multer ({ storage: storage})
router.post('/', upload.single('upload'), async (req, res) => {
    try {
        const newFile = await FileRef.create({
            filename: req.file.filename,
            uuid: req.uuid
        })
        res.render('fileUploadedView', {
            data:newFile
        })
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
})


module.exports = router;

