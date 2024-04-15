import mongoose from "mongoose"
import { User } from "../models/usermodel.js"
import { Ticket } from "../models/ticketmodel.js"
import path from "path"
import fs from "fs"

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

export const userContribute = async (req, res) => {
    try {
        const files = Object.values(req.files)[0];
        files.forEach((file) => {
            let uploadPath = path.join("E:/IT-Uttsav-Hackathon/server", 'store/', file.name);

            file.mv(uploadPath, (err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send('Error uploading file.');
                }
                //File Upload Successful -> Now rename + Store
                let newName = fileRename(file.name)
                //saving
                // saveDB(newName, userData);
            });
        });
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