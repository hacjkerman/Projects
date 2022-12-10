require('dotenv').config()
const EMAIL = process.env.EMAIL
const PASSWORD = process.env.EMAIL_PSWD

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport( {
    service: "gmail",
    auth: {
        user: EMAIL,
        pass: PASSWORD
    }
});

module.exports = {
    verifyUserEmail: async function verifyUserEmail(name, userEmail, quote) {
        try {
            let info = await transporter.sendMail({
                from: EMAIL,
                to: userEmail,
                subject: name + " you are reading Daily Inspirational Quote Gen!",
                text: "Today's inspirational message reads this:\n\"" + quote + "\"\nHave a motivated and productive day!",
                html: "<b>Hello Shworld</b>",
            })
            console.log(info.messageId)
            console.log("Testing email functionality")
        } catch (err) {
            console.log(err)
        }
    }
}