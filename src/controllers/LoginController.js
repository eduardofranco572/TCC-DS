const database = require('../models');
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");

class LoginController {

  static index(_req, res) {
    res.render("login");
  }

  static async realizaLogin(req, res) {
    const { email, senha } = req.body;

    const usuario = await database.Usuarios.findOne({
      where: {
        email,
      },
    });

    if (!usuario) {
      return res.status(401).json({ mensagem: `usuário ou senha invalidos` });
    }
    const resultado = bcrypt.compareSync(senha, usuario.senha);

    if (!resultado) {
      return res.status(401).json({ mensagem: `usuário ou senha invalidos` });
    }

    req.session.usuario = {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
    };

    return res.status(200).json({ mensagem: `usuário autenticado` });
  }

  static logOut(req, res) {
    if (req.session) {
      req.session.destroy(err => {
        if (err) {
          return res.status(400).json({ mensagem: 'Não foi possivel realizar o log out' });
        } else {
          return res.status(200).json({ mensagem: 'Log out realizado com sucesso !' });
        }
      });
    } else {
      res.end()
    }
  }

};

module.exports = LoginController;