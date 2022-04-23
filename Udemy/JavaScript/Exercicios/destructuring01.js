// novo recurso do ES2015

let pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

let { nome, idade} = pessoa 
console.log(nome, idade)

let { nome: n, idade: i } = pessoa
console.log(n,i)

let {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

let { endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)