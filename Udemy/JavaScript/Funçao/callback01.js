let fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(fabri) {
    console.log(fabri)
})
fabricantes.forEach(fabricante => console.log(fabricante))