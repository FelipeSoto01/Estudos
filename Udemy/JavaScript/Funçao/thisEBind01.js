let pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()
let falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

let falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()