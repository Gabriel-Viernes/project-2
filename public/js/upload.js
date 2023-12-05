console.log('upload.js entered')
let copyText = document.querySelector('#filepath')
copyText.addEventListener("copy", function(event) {
    event.preventDefault()
    if(event.clipboardData) {
        event.clipboardData.setData("text/plain", filepath.textCentent)
        alert("Text copied!")
    }
})