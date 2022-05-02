let prod1 = {
    nome: '...',
    preco: 45
}
let prod2 = {
    nome: '...',
    preco: 12345
}

// factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa())