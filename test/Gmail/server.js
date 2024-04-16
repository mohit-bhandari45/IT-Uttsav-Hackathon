const nodemailer = require("nodemailer");
require("dotenv").config();
const path = require("path")


console.log(process.env.USER,process.env.APP_PASSWORD)

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
    port: 587, // Port for SMTP (usually 465)
    secure: false, // Usually true if connecting to port 465
    auth: {
        user: process.env.USER, // Your email address
        pass: "mhpv lsea wfql yhgs", // Password (for gmail, your app password)
    },
});

const mailOptions = {
    from: {
        name: "Mohit",
        address: process.env.USER,
    },
    to: "mohitbhandari852@gmail.com",
    subject: "Testing, testing, 123",
    html: `
    <h1>Hello there</h1>
    <p>Isn't NodeMailer useful?</p>
    `,
    attachments: [
        {
            filename: "Mohit Bhandari (1).pdf",
            path: path.join(__dirname, "Mohit Bhandari (1).pdf"),
            contentType: "application/pdf"
        },
        {
            filename: "card.png",
            path: path.join(__dirname, "card.png"),
            contentType: "application/pdf"
        }
    ]
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