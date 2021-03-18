require("dotenv").config();
const express = require("express");
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const app = express();
const port = 3000;

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_AUTH,
        pass: process.env.EMAIL_PASSWORD
    }
});
const options = {
    viewEngine: {
        partialsDir: __dirname + "/views/partials",
        layoutsDir: __dirname + "/views/layouts",
        extname: ".hbs"
    },
    extName: ".hbs",
    viewPath: "views"
};
transporter.use("compile", hbs(options));
app.get("/", async(req, res) => {
    try {
        const otpVerify = {
            appName: process.env.APP_NAME,
            empName: "Taki Uddin",
            otp: otpGenerator.generate(4, { digits: true, alphabets: false, upperCase: false, specialChars: false })
        };
        const mailInfo = {
            from: '"Taki Uddin" <' + process.env.EMAIL_AUTH + '>',
            to: '"Taki Uddin" <' + process.env.EMAIL_AUTH + '>',
            subject: process.env.APP_NAME + " Account Verification",
            template: "orderConfirmation",
            context: otpVerify,
        };
        await transporter.sendMail(mailInfo);
        res.send("Success");
    } catch (e) {
        res.status(500).send(e);
    }
});