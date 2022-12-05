const configEmail = require("../config/configuracaoEmail");

class EmailController {

  static emailBoasVindas(email, nome) {

    const mailOptions = {
      from: 'alex.d.goncalves21@gmail.com',
      to: email,
      subject: 'Que bom ter você com a gente! 💙',
      template: 'boasVindas',
      context: {
        username: nome,
      }
    };

    configEmail.sendMail(mailOptions, function (error, info) {
      if (error) console.log(error);
      else console.log('Email enviado: ' + info.response);
    });
  }

}

module.exports = EmailController;