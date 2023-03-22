const Usuario = require("../model/usuario");
const jwt = require("jsonwebtoken");

//função para retornar registro de um dado email
const loginService = (email) => Usuario.findOne({ email });

const generateToken = (user, segredo) => jwt.sign({user},segredo);

const listarUsuarios = () => Usuario.find();

const exiberUsuario = (cpf) => Usuario.findOne({ cpf });

const criarUsuario = (usuario) => Usuario.create(usuario);

const atualizarUsuario = (cpf, usuario) => Usuario.findOneAndUpdate(cpf,usuario,{returnDocument: "after"});

const deletarUsuario = (cpf) => Usuario.findOneAndRemove(cpf);

module.exports = { 
    loginService, 
    listarUsuarios,
    exiberUsuario,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario,
    generateToken 
};
