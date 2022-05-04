let jurosSimples = (capital, juro, tempo) => {
    return capital + (capital * juro * tempo)
}

let jurosCompostos = (capital, juro, tempo) => {
    return capital * (1 + juro) ** tempo
}


console.log(jurosSimples(10000, 20/10000, 30))
console.log(jurosCompostos(10000, 20/10000, 30))
