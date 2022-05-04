let operacoes = function  (x, y) {
        let soma = x + y
        let sub = x - y
        let mult = x * y
        let div = x / y
        return {
            soma, sub, mult, div
        }
}
console.log(operacoes(1, 2))

