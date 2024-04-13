import mongoose from "mongoose"
import { User } from "../models/usermodel.js"
import { Ticket } from "../models/ticketmodel.js"
// import { save } from "./addons/image.js"

export const userContribute = async (req, res) => {
    try {
        // User.create(req.body);
        // console.log(req.body)
        let a=await save(req.body.image)
        res.send("Completed user")
    } catch (error) {
        console.log(error)
    }
}

export const userTicket = (req, res) => {
    try {
        Ticket.create(req.body)
        res.send("Completed ticket")
    } catch (error) {
        console.log(error)
    }
}