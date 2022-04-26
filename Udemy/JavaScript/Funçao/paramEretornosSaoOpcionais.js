function area(largura, altura) {
    let area = largura * altura
    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}m2 `)
    } else {
        return area
    }
}
console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 5, 9, 7, 8))
console.log(area(5, 5))