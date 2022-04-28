// Clousure é o escopo criado quando uma funçao é declarada
// Esse escopo permite a funçao acessar e manipular variaveis externas à funçao

// contexto lexico em açao!

let x = 'Global'

function fora() {
    let x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}
let minhaFuncao = fora()
console.log(minhaFuncao())
