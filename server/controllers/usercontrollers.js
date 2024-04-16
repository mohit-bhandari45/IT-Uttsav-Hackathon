import mongoose from "mongoose"
import { User } from "../models/usermodel.js"
import { Ticket } from "../models/ticketmodel.js"
import path from "path"
import fs from "fs"
import nodemailer from "nodemailer"
import { Console } from "console"

export const userContribute = async (req, res) => {
    try {

        console.log(req.body)
        /* email functions */   
        const email = req.body.personal.email
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
            port: 587, // Port for SMTP (usually 465)
            secure: false, // Usually true if connecting to port 465
            auth: {
                user: "turnintech476@gmail.com", // Your email address
                pass: "mhpv lsea wfql yhgs", // Password (for gmail, your app password)
            },
        });
        const mailOptions = {
            from: {
                name: "Mohit",
                address: "turnintech476@gmail.com",
            },
            to: email,
            subject: "Regarding Registration",
            html: `
            <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#ffffff" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-collapse: collapse;">
            <tr>
            <td align="center" valign="top" style="padding: 20px;">
            <h1>Welcome to Our Website!</h1>
            </td>
            </tr>
            <tr>
            <td align="left" valign="top" style="padding: 20px;">
            <p>Hello ${req.body.personal.uname},</p>
            <p>We're thrilled to have you as a new member of our community!</p>
            <p>With your new account, you now have access to exclusive features and content.</p>
            <p>If you have any questions or need assistance, feel free to reach out to us.</p>
            <p>Best regards,<br> EcoHaul</p>
            </td>
            </tr>
            </table>
            `,
            // attachments: [
            //     {
            //         filename: "Mohit Bhandari (1).pdf",
            //         path: path.join("E:/IT-Uttsav-Hackathon/server", "Mohit Bhandari (1).pdf"),
            //         contentType: "application/pdf"
            //     },
            //     {
            //         filename: "card.png",
            //         path: path.join("E:/IT-Uttsav-Hackathon/server", "card.png"),
            //         contentType: "application/pdf"
            //     }
            // ]
        }
        const sendMail = async (transporter, mailOptions) => {
            try {
                await transporter.sendMail(mailOptions);
                console.log("Email is sent")
            } catch (error) {
                console.log(error)
            }
        }
        sendMail(transporter, mailOptions)


        /*File Functions*/
        // const files = Object.values(req.files)[0];
        // files.forEach((file) => {
        //     let uploadPath = path.join("E:/IT-Uttsav-Hackathon/server", 'store/', file.name);
        //     file.mv(uploadPath, (err) => {
        //         if (err) {
        //             console.error(err);
        //             return res.status(500).send('Error uploading file.');
        //         }
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

