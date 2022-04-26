function getInteiroAleatorioEntre(min, max) {
    let valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opçao escolhida foi ${opcao}`)
} while (opcao != -1)

console.log('Até a proxima')