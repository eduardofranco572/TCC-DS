const { Router } = require('express');

const UsuarioController = require('../controllers/UsuarioController');
const LoginController = require('../controllers/LoginController');
const HomeController = require('../controllers/HomeController');

const autentificacao = require("../middlewares/autentificacao");



const router = Router();

//Cadastro
router.get('/cadastro', UsuarioController.index);
router.post('/verificaCadastro', UsuarioController.verificaUsuarioExistente);
router.post('/cadastro', UsuarioController.criaUsuario);

//Login
router.get('/login', LoginController.index);
router.post('/login', LoginController.realizaLogin);
router.delete('/login', LoginController.logOut);


//Home
router.get('/home', autentificacao, HomeController.index);
router.get('/home/buscaDados', autentificacao, HomeController.buscaDados);

router.get('/usuarios', UsuarioController.buscaTodosUsuarios);
router.get('/usuariosDesativados', UsuarioController.buscaTodosUsuariosDesativados);
router.put('/usuarios/:id', UsuarioController.atualizaUsuario);
router.put('/desativaUsuarios/:id', UsuarioController.desativaUsuario);


module.exports = router;