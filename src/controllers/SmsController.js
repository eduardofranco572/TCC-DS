const accountSid = "AC03ad1848ba2b4ec2c58eab73fbc187fe";
const authToken = "c98c43172a075b41939b59d5e0ca11be";
const client = require('twilio')(accountSid, authToken);


class SmsController {
  static async msgBoasVindas(telefone) {

    client.messages
      .create({
        body: 'Que bom ter você com a gente! 💙\nAgradecemos por ter contratado os nossos serviços.\nPara realizar o cadastro efetivo da sua empresa iremos entrar em contato com você no prazo de 48 horas.\n Muito obrigado pela confiança !!',
        from: '+13466332935',
        to: `+55${telefone}`
      })
      .then(message => console.log("sms enviado com sucesso para" + numero + " id " + message.sid))
      .catch(erro => console.log("sms não enviado para " + numero + " erro " + erro))
  }
}

module.exports = SmsController;