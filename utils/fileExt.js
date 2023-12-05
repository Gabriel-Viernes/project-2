function mimeTypeResolver(mimetype) {
    console.log(mimetype)
    switch(mimetype) {
        case 'image/png':
            return ".png"
        case 'image/jpeg':
            return ".jpeg"
        case 'image/gif':
            return ".gif"
    }
}
module.exports = mimeTypeResolver