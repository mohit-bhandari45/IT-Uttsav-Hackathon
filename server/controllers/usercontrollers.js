import mongoose from "mongoose"
import { User } from "../models/usermodel.js"
import { Ticket } from "../models/ticketmodel.js"

export const userContribute = async (req, res) => {
    try {
        console.log(req)
        console.log("mnohit")
        // const files = Object.values(req.files)[0];
        // console.log(files)
        // console.log("mohit")

        // files.forEach((file) => {
        //     let uploadPath = path.join(__dirname, 'store/', file.name);

        //     file.mv(uploadPath, (err) => {
        //         if (err) {
        //             console.error(err);
        //             return res.status(500).send('Error uploading file.');
        //         }
        //         //File Upload Successful -> Now rename + Store
        //         let newName = fileRename(file.name)
        //         //saving
        //         saveDB(newName, userData);
        //     });
        // });
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