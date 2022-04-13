/*con let declaro la variable e entre crases[] declaro quantas posiçoes a variable vai ter */ 
let num = [5, 7, 3, 9, 2]
/* com o nome da variable adicionando .push e dentro de () posso colocar mais uma pisiçao dentro da variable*/
num.push(8)

/* si quero saber a ordemm crecente dos valores na variable é só colocar num.sort() */

console.log(num)
console.log(`o vetor tem ${num.length} posiçoes`)
console.log(`O primer valor do vetor é ${num[0]}`)

let pos = num.indexOf(9)
console.log(`O valor esta na posiçao ${pos}`)