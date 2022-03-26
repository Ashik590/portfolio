const nodemailer = require("nodemailer");
require("dotenv").config();
const express = require("express");
const UserMsg = require("./models/user");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/msg", async (req, res) => {
  try {
    const msg = new UserMsg({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    const result = await msg.save();

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "adnanshanto1@gmail.com",
        pass: "01991393572",
      },
    });

    const content = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <style>
            * {
              margin: 0;
              padding: 0;
            }
            h1 {
              width: fit-content;
              margin: auto;
              margin-bottom: 10px;
              font-family: 'Google Sans';
            }
            h2{
              text-align:center;
              margin-bottom:5px;
            }
            p {
              background: tomato;
              text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.829);
              color: #fff;
              font-size: 20px;
              padding:10px
            }
            span{
              text-transform:capitalize;
            }
          </style>
        </head>
        <body>
          <h1>
            Message from <span>${req.body.name}</span>
          </h1>
          <h2>Email : ${req.body.email}</h2>
          <p>${req.body.message}</p>
        </body>
      </html>
    `;

    let mailOptions = {
      from: "adnanshanto1@gmail.com",
      to: "adnanshanto1@gmail.com",
      subject: "Sent message from portfolio website",
      html: content,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent", info.messageId, info.response);
    });

    res.render("sent", {
      name: req.body.name,
    });
  } catch (err) {
    res.redirect("/");
    console.log(err);
  }
});

app.listen(port, () => {
  console.log("server running port", port);
});
