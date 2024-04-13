import express from "express"
import { userContribute, userTicket } from "../controllers/usercontrollers.js";
import { findOrg,orgRegister } from "../controllers/organisation.js";
import path from "path"
import fs from "fs"
import fileUpload from "express-fileupload"

const router = express.Router();
router.use(fileUpload());

router.get("/", (req,res)=>{
  res.send("mohit")
})

router.post(`/user/contribute/`, userContribute)
router.post(`/user/ticket/`, userTicket)

router.get("/org/fetch/", findOrg)
router.post("/org/register/", orgRegister)



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
router.post('/upload', (req, res) => {
  console.log(req.body)
  // if (!req.files || Object.keys(req.files).length === 0) {
  //     return res.status(400).send('No files were uploaded.');
  // }

  // const file = req.files.file;
  // const uploadPath = path.join(__dirname, 'store/', file.name);

  // file.mv(uploadPath, (err) => {
  //     if (err) {
  //         console.error(err);
  //         return res.status(500).send('Error uploading file.');
  //     }
  //     //File Upload Successful -> Now rename + Store
  //     let newName = fileRename(file.name)
  //     saveDB(newName, req.body.userData)

  //     res.send('File uploaded successfully!');
  // });
});

export default router