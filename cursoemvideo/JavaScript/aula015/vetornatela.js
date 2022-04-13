let valores = [8, 9, 5, 4, 2, 7, 3, 1]

// console.log(valores)

/* jeito arcaico de fazer repetiçoes
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
*/

/* jeito um pouco mais simplificado
for(let pos=0; pos < valores.length; pos++) {
    console.log(`Esta é a posiçao numero ${pos} e recebe o valor ${valores[pos]}`)
}*/

/* jeito bem simplificado*/
for(let pos in valores) {
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
 }