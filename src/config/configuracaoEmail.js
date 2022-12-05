const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "alex.d.goncalves21@gmail.com",
    pass: "ktomvivogrinyoui"
  },
});

const handlebarOptions = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: path.resolve(__dirname, '../templates/'),
    defaultLayout: false,
  },
  viewPath: path.resolve(__dirname, '../templates/'),
  extName: ".handlebars",
}

module.exports = transporter.use('compile', hbs(handlebarOptions));