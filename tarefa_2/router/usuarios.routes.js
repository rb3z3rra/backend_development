const router = require("express").Router();
const usuarios = require("../controller/usuarios.controller")

router.get("/listaUsuarios", usuarios.listaUsuarios);
router.get("/exibeUsuario/:cpf", usuarios.exibeUsuario);
router.post("/criarUsuario", usuarios.criarUsuario);
router.put("/atualizarUsuario/:cpf", usuarios.atualizarUsuario);
router.delete("/deletarUsuario/:cpf", usuarios.deletarUsuario);

module.exports = router;