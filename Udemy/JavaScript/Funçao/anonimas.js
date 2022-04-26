let soma = function (x, y) {
    return x + y
}

let imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function(x, y) {
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)


let pessoa = {
    falar: function () {
        console.log('Opa!')
    }
}

pessoa.falar()