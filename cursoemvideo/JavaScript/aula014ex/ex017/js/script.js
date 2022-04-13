function tabua() {
    
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')
    
    if (num.value.length == 0) {
        window.alert(`[ERRO] Por favor coloque algum numero.`)
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''

           for(let x = 1; x <= 10; x++ ) {
            let item = document.createElement('option')
            item.text = `${n} x ${x} = ${n*x} `
            tab.appendChild(item)
            item.value = `tab${x}`
            }
    }
}