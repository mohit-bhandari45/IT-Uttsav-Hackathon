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


async function fileRename(oldFile, index){
    const fileExt = oldFile.split('.')[1]
    let oldFileName = `store/${oldFile}`
    let newFileName = `store/${index}.${fileExt}`
    await fs.rename(oldFileName, newFileName, (err) => {
        if (err) 
            throw err;
    });
    return newFileName
}

async function fileMove(file, uploadPath){
    await file.mv(uploadPath, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error uploading file.');
        }
    });
    //console.log("moved")
}



// Route for file upload
app.post('/upload', (req, res) => {
    const files = Object.values(req.files)[0];
    //var fileCount = fs.readdirSync('store/').length || 0;
    files.forEach((file) => {
        let uploadPath = path.join(__dirname, 'store/', file.name);
        var fileName = file.name
        fileMove(file, uploadPath).then(()=>{
            //console.log(fileName)
            //fileName_response.push(fileName)
        })   
        //fileCount++;
    });
    res.json({
        "success": true
    })
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});