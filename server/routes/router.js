import express from "express"
import { uploadFile, userContribute, userTicket } from "../controllers/usercontrollers.js";
import { findOrg,orgRegister } from "../controllers/organisation.js";

const router = express.Router();

router.post(`/user/contribute`, userContribute)
router.post(`/user/upload`, uploadFile)
router.post(`/user/ticket`, userTicket)

router.get("/org/fetch", findOrg)
router.post("/org/register", orgRegister)

export default router