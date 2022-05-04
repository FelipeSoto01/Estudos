function pontoFlutuante(x, y) {
    let soma = x + y
    let resultado = soma.toFixed(2)
    return `R$ ${resultado.replace('.', ',')}`
}

console.log(pontoFlutuante(0.1, 0.2))

let pontoF = (x, y) => {
    let nums = x + y
    let res = nums.toFixed(2)
    console.log(`R$ ${res.replace('.', ',')}`)
} 
pontoF(0.1, 0.2)