import express from "express"
import { userContribute, userTicket } from "../controllers/controllers.js";
import { findOrg,orgRegister } from "../controllers/organisation.js";

const router = express.Router();

router.post(`/user/contribute/`, userContribute)
router.post(`/user/ticket/`, userTicket)

router.get("/org/fetch/", findOrg)
router.post("/org/register/", orgRegister)

export default router