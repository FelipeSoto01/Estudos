class pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
let p1 = new pessoa('Joao')
p1.falar()


let criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

let p2 = criarPessoa('Joao')
p2.falar()

let p3 = criarPessoa('Pedro')
p3.falar()