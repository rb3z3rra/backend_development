const usuarios = [
  {
    cpf: 737,
    nome: "Rodrigo",
    endereco: "R 1",
    telefone: "92",
    email: "email",
    idade: 39,
    tipo: "ADM",
    senha: "123",
  },
];

const listaUsuarios = (req, res) => {
  res.send(usuarios);
};

const exibeUsuario = (req, res) => {
  const cpf = req.params.cpf;
  let found = false;
  usuarios.map(function (valor) {
    if (valor.cpf == cpf) {
      found = true;
      return res.send(valor);
    }
  });

  if (!found) {
    res.status(404).send({ message: "O usuário não foi encontrado" });
  }
};

const criarUsuario = (req, res) => {
  const usuario = req.body;

  if (Object.keys(usuario).length === 0) {
    res.status(400).send({ message: "O corpo da mensagem está vazio" });
  }

  if (!usuario.cpf) {
    res.status(400).send({ message: "Campo 'cpf' não foi encontrado" });
  }

  if (!usuario.nome) {
    res.status(400).send({ message: "Campo 'nome' não foi encontrado" });
  }

  if (!usuario.endereco) {
    res.status(400).send({ message: "Campo 'endereco' não foi encontrado" });
  }

  if (!usuario.telefone) {
    res.status(400).send({ message: "Campo 'telefone' não foi encontrado" });
  }

  if (!usuario.email) {
    res.status(400).send({ message: "Campo 'email' não foi encontrado" });
  }
  if (!usuario.idade) {
    res.status(400).send({ message: "Campo 'idade' não foi encontrado" });
  }
  if (!usuario.tipo) {
    res.status(400).send({ message: "Campo 'tipo' não foi encontrado" });
  }
  if (!usuario.senha) {
    res.status(400).send({ message: "Campo 'senha' não foi encontrado" });
  }

  usuarios.push(usuario);
  res.send(usuario);
};

const atualizarUsuario = (req, res) => {
  const cpf = req.params.cpf;
  const usuario = req.body;
  let found = false;

  if (Object.keys(usuario).length === 0) {
    res.status(400).send({ message: "O corpo da mensagem está vazio" });
  }

  if (!usuario.cpf) {
    res.status(400).send({ message: "Campo 'cpf' não foi encontrado" });
  }

  if (!usuario.nome) {
    res.status(400).send({ message: "Campo 'nome' não foi encontrado" });
  }

  if (!usuario.endereco) {
    res.status(400).send({ message: "Campo 'endereco' não foi encontrado" });
  }

  if (!usuario.telefone) {
    res.status(400).send({ message: "Campo 'telefone' não foi encontrado" });
  }

  if (!usuario.email) {
    res.status(400).send({ message: "Campo 'email' não foi encontrado" });
  }
  if (!usuario.idade) {
    res.status(400).send({ message: "Campo 'idade' não foi encontrado" });
  }
  if (!usuario.tipo) {
    res.status(400).send({ message: "Campo 'tipo' não foi encontrado" });
  }
  if (!usuario.senha) {
    res.status(400).send({ message: "Campo 'senha' não foi encontrado" });
  }

  usuarios.map(function (valor, index) {
    if (valor.cpf == cpf) {
      found = true;
      usuarios[index] = usuario;
      return res.send(usuarios[index]);
    }
  });

  if (!found) {
    res.status(404).send({ message: "O usuário não foi encontrado" });
  }
};

const deletarUsuario = (req, res) => {
  const cpf = req.params.cpf;
  usuarios.map(function (valor, index) {
    if (valor.cpf == cpf) {
      found = true;
      usuarios.splice(index, 1);
      return res.send(usuarios);
    }
  });
  if (!found) {
    res.status(404).send({ message: "Não foi encontrado" });
  }
};

module.exports = {
  listaUsuarios,
  exibeUsuario,
  criarUsuario,
  atualizarUsuario,
  deletarUsuario
};
