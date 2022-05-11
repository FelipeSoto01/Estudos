let a = 1
let b = 2
let c = 3

let obj1 = { a: a, b: b, c: c }
let obj2 = {a, b, c}
console.log(obj1, obj2)


let nomeAtri = 'nota'
let valorAtri = 7.87

let obj3 = {}
obj3[nomeAtri] = valorAtri
console.log(obj3)

let obj4 = { [nomeAtri]: valorAtri}
console.log(obj4)

let obj5 = {
    funcao1: function() {
        //..
    },
    funcao2() {
        //..
    }
}
console.log(obj5)