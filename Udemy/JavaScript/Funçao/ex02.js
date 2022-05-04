let tipoDeTriangulo = (a, b, c) => {
    
    let equi = 'O triangulo é Equilatero.'
    let isos = 'O triangulo é Isósceles.'
    let esca = 'O triangulo é Escaleno'
    if(a == b == c) {
        return equi
    }
    if(a === b) {
        return isos
    } 
    if(a === c) {
        return isos
    }
    if(b === c) {
        return isos
    }
    else {
        return esca
    }
}

console.log(tipoDeTriangulo(1, 1, 1))
console.log(tipoDeTriangulo(1, 1, 2))
console.log(tipoDeTriangulo(1, 2, 1))
console.log(tipoDeTriangulo(2, 1, 1))
console.log(tipoDeTriangulo(1, 2, 3))



