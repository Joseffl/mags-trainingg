

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail", // Change service if not using Gmail
  auth: {
    user: process.env.EMAIL_USER, // Your email from .env file
    pass: process.env.EMAIL_PASS, // Your email password from .env file
  },
});

// Email route
app.post("/send-email", (req, res) => {
  const { first_name, last_name, email, phone, message } = req.body;

app.get("/send-email", (req, res) => {
    res.status(200).send("This endpoint is for POST requests only.");
  });
  

  const mailOptions = {
    from: email,
    to: "timmyjoseph505@gmail.com", // Replace with your recipient's email
    subject: `Message from ${first_name} ${last_name}`,
    text: `Name: ${first_name} ${last_name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
