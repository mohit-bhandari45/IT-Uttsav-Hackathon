import mongoose from "mongoose"
import { User } from "../models/usermodel.js"
import { Ticket } from "../models/ticketmodel.js"

export const userContribute = (req, res) => {
    try {
        User.create(req.body);
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