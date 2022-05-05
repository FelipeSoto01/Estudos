// usando a notaçao literal
let obj1 = {}
console.log(obj1)

// Objecto em JS
console.log(typeof Object, typeof new Object)
let obj2 = new Object
console.log(obj2)

// Funçoes construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
let p1 = new Produto('Caneta', 7.99, 0.15)
let p2 = new Produto('Notebook', 2998.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Funçao Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (this.salarioBase / 30) * (30 - faltas)
        }
    }
}

let f1 = criarFuncionario('Joao', 7980, 4)
let f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
let filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma funçao famosa que retorna Objeto...
let fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
