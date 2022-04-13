let num = document.getElementById('num')
let tab = document.getElementById('tabla')
let res = document.querySelector('div#res')
let valores = []

function adicionar() {
    if (isnumero(num.value) && !intabla(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        tab.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou ja esta na tabla')
    }
    num.value = ''
    num.focus()
}

function isnumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function intabla(n, t) {
    if (t.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} valores cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p> `
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>O total entre todos os valores informados é ${soma}.</p> `
        res.innerHTML += `<p>A media entre todos os valores é ${media}.</p>`
    }
}