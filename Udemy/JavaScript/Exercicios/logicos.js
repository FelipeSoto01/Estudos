function compras(trabalho1, trabalho2) {
    let comprarSorvete = trabalho1 || trabalho2
    let comprarTv50 = trabalho1 && trabalho2
    //let comprarTv32 = !!(trabalho1 ^ trabalho2)//ou exclusivo, bitwise xor
    let comprarTv32 = trabalho1 != trabalho2
    let manterSaudavel = !comprarSorvete //operador unario

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false)) 
