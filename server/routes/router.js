import express from "express"
import { organisation, userContribute,userTicket } from "../controllers/controllers.js";

const router = express.Router();

router.get("/",organisation)
router.post(`/user/contribute/`, userContribute)
router.post(`/user/ticket/`,userTicket)

export default router