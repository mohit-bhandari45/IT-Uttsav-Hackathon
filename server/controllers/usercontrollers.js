import mongoose from "mongoose"
import { User } from "../models/usermodel.js"
import { Ticket } from "../models/ticketmodel.js"
import path from "path"
import nodemailer from "nodemailer"

export const uploadFile=(req,res)=>{
    /*File Functions*/
    const files = Object.values(req.files)[0];
    files.forEach((file) => {
        let uploadPath = path.join("E:/IT-Uttsav-Hackathon/server", 'store/', file.name);
        file.mv(uploadPath, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error uploading file.');
            }
        });
    });
    res.send("Completed the user upload")
}

export const userContribute = async (req, res) => {
    
    try {
        console.log(req.body)
        /* email functions */
        
        //save to db
        User.create(req.body)
        
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
            <div class="container" style="width: 90vw; margin: auto; font-family: Arial, Helvetica, sans-serif;">
            <div class="from" >From : <span style="color: rgb(59, 148, 186); font-weight: 600;">Ecohaul</span></div>
            <div  class="content">
            <h1 style="text-align: center;">Thank You For your contribution</h1>
            <div class="overview">
                <div>Hey ${req.body.personal.fname}<span style="margin: 0px 2px;"></span>${req.body.personal.lname}</div>
                <div>On behalf of the entire team at <span style="color: rgb(59, 148, 186); font-weight: 600;">Ecohaul</span>, I want to extend a warm welcome to you! We're thrilled to have you as a new contributor of our community.</div>
                <div>Thank you for choosing <span style="color: rgb(59, 148, 186); font-weight: 600;">Ecohaul</span> for contributing to the great cause. We're committed to providing you with an exceptional experience.</div>
                <div>As a contributor of Ecohaul, you now contribute by giving variety of waste products.</div>
            </div>
            <div class="details" style="margin: 20px 0px;">
                <div style="font-weight: 600; font-size: large; margin-bottom: 10px;">Details</div>
                <div style="font-weight: 600;">Your Item Details:-</div>
                <div class="items" >
                    <div>Item name<span style="margin: 0px 2px;"></span>:<span style="margin: 0px 2px;"></span>${req.body.items.name}</div>
                    <div>Item Type<span style="margin: 0px 2px;"></span>:<span style="margin: 0px 2px;"></span>${req.body.items.types}</div>
                </div>
                <div style="font-weight: 600; margin-top: 10px;">Your Address:-</div>
                <div>${req.body.location.address}</div>
            </div>
            <div style="margin-top: 30px; margin-bottom: 3px;">Reach out to....</div>
            <div>For more info <a href="https://www.youtube.com/">Click Here</a></div>
            <div class="foot" style="margin: 30px 0px;">
                <div>Best Regards</div>
                <div style="font-weight: 600"><span style="color: rgb(59, 148, 186); font-weight: 600;">Ecohaul</span></div>
            </div>
        </div>
    </div>
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
        await sendMail(transporter, mailOptions)
        res.send("Completed user Registration")
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

