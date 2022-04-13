function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossivel contar.`
        window.alert(`[ERRO] Verifique os dados.`)
    } else {
        res.innerHTML = `Contando: <br> `
        var ini = Number(inicio.value)
        var fi = Number(fim.value)
        var pas = Number(passo.value)

      if (ini < fi) { 
            // contagem crescente//
          for(var cont = ini; cont <= fi; cont += pas) {
            res.innerHTML += `${cont} \u{1F449} `}
        } else {
            //contagem descrecente//
            for(var cont = ini; cont >= fi; cont -= pas){
                res.innerHTML += `${cont} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}