let valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    let valor = 'Local'
    minhaFuncao()
}
exec()
