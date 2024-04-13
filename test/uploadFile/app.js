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
    console.log(parsedData)
}


// Route for file upload
app.post('/upload', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    const file = req.files.file;
    const uploadPath = path.join(__dirname, 'store/', file.name);

    file.mv(uploadPath, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error uploading file.');
        }
        //File Upload Successful -> Now rename + Store
        let newName = fileRename(file.name)
        saveDB(newName, req.body.userData)

        res.send('File uploaded successfully!');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

