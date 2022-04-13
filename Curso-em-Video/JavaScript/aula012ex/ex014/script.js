function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var saludo = document.getElementById('saludo')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas.` 
    if (hora >= 0 && hora < 12) {
        img.src = 'bom-dia.png'
        document.body.style.background = '#F2D16D'
        saludo.innerHTML = `Bom Dia!`
    } else if (hora >= 12 && hora < 18) {
        img.src = 'boa-tarde.png'
        document.body.style.background = '#BF863F'
        saludo.innerHTML = `Boa Tarde`
    } else {
        img.src = 'boa-noite.png'
        document.body.style.background = '#385773'
        saludo.innerHTML = `Boa Noite!`
    }
}

