const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const cors = require('cors');
const fs = require('fs')

const app = express();
const PORT = 3000;

app.use(cors())
app.use(fileUpload());
app.use(express.json())

function fileRename(oldFile){
    const files = fs.readdirSync('store/').length;
    const fileExt = oldFile.split('.')[1]

    let oldFileName = `store/${oldFile}`
    let newFileName = `store/${files}.${fileExt}`
    fs.rename(oldFileName, newFileName, (err) => {
        if (err) {
            throw err;
        } 
    });
    return newFileName
}



function saveDB(fileName, userData){
    const parsedData = JSON.parse(userData)
    console.log(fileName)
}


// Route for file upload
app.post('/upload', (req, res) => {
    const files = Object.values(req.files)[0];
    const userData = req.body.userData;

    files.forEach((file) => {
        let uploadPath = path.join(__dirname, 'store/', file.name);

        file.mv(uploadPath, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error uploading file.');
            }
            //File Upload Successful -> Now rename + Store
            let newName = fileRename(file.name)
            //saving
            saveDB(newName, userData);
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

