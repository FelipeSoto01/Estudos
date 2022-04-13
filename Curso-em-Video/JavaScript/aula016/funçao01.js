function parimp(n) {
    if (n%2 == 0) {
        return `par`
    } else {
        return `impar`
    }
}
/* jeito mais longo
let res = parimp(5)
console.log(res)
*/
console.log(parimp(5))