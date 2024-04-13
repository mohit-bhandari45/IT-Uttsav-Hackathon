import express from "express"
import { userContribute, userTicket } from "../controllers/usercontrollers.js";
import { findOrg,orgRegister } from "../controllers/organisation.js";
const router = express.Router();
import multer from "multer";


// router.post(`/user/contribute/`, userContribute)
// router.post(`/user/ticket/`, userTicket)

// router.get("/org/fetch/", findOrg)
// router.post("/org/register/", orgRegister)


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'store/'); 
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });


router.post("/", upload.single('file'), (req, res)=>{
    res.send("test");
})
export default router