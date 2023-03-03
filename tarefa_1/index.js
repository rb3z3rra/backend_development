const { envelhecer } = require("./funcoes");


class Pessoa{
    constructor(cpf,nome,endereco,telefone,email,idade){
        this.cpf = cpf,
        this.nome = nome,
        this.endereco = endereco,
        this.telefone = telefone,
        this.email = email,
        this.idade = idade
    }

    aniversario(){
        this.idade = envelhecer(this.idade);
    }
    infos(){
        return `${this.nome} - ${this.idade}`;
    }
}


class Usuario extends Pessoa{
    acessos=[];
    constructor(cpf,nome,endereco,telefone,email,idade,tipo,senha){
        super(cpf,nome,endereco,telefone,email,idade);
        this.tipo = tipo;
        this.senha = senha;
    }

    validarSenha(){
    }
    infos(){
        return `${this.nome} - ${this.email} -${this.tipo}`;
    }
    logAcessos(data){
        this.acessos.push(data);
    }
}

const joao = new Usuario('123.123.123-12', 'Joao Neves' ,'rua 13 casa 9', '92929292929','jn@email.com',18,'comum','!#((#!')
console.log(joao.idade);
joao.aniversario();
console.log(joao.idade);
console.log("-----------------------------------------");

console.log(joao.infos());
console.log("-----------------------------------------");

joao.logAcessos("02/03/23");
console.log(joao.acessos);
joao.logAcessos("05/03/23");
console.log(joao.acessos);

joao.acessos.map(function(valor,posicao){
    console.log(`Acesso ${posicao+1} -- Data: ${valor}`);
});
console.log("-----------------------------------------");
const json = JSON.stringify(joao);
console.log(json);