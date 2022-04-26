Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

let imprimirResultado = function (nota) {
    if(nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if(nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if(nota.entre(4, 6.99)) {
        console.log('Recuperaçao')
    } else if(nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota invalida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2)
imprimirResultado(11)
imprimirResultado(-1)