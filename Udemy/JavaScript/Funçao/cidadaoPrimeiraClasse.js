// funçao em JS é First-class object 
//Higher-order function

// criar de forma literal
function fun1() {}

// armazenar em uma variavel
let fun2 = function () {}

// armazenar em um array
let array = [function (a, b) {return a + b}, fun1, fun2]

console.log(array[0](2, 3))

// armazenar em um atributo de objeto
let obj = {}
obj.falar = function() {return 'Opa!'}
console.log(obj.falar())

// passar funçao como parametro
function run(fun) {
    fun()
}
run(function () {console.log('Executando...')})

// uma funçao pode retornar/conter outra funçao
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)

