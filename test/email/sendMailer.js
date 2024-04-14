const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "mohitbhandari852@gmail.com",
        pass: "jn7jnAPss4f63QBp6D",
    },
});