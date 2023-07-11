require("dotenv").config()
const nodemailer = require("nodemailer")

async function sendEmail(mail) {
    const transporter = await nodemailer.createTransport({
      service: process.env.SERVICE,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASS,
      },
    });
  
    const info = await transporter.sendMail({
      from: mail.emailAddress, // sender address
      to: process.env.USER_EMAIL, // list of receivers
      subject: mail.subject, // Subject line
      text: mail.message, // plain text body
      html: `<p>${mail.message}</p><br><p>${mail.emailAddress}</p>`, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    return {message: "Email enviado con exito"};
  }

async function routeSendEmail (req, res) {
    const email = req.body
    try {
        const newEmail = await sendEmail(email)
        res.status(200).send(newEmail)
    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    routeSendEmail
}