function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12) {
    // BOM DIA
    img.src = 'imagens/manha-redonda.png'
    document.body.style.backgroundColor = '#F1D5B0'
} else if (hora >= 12 && hora < 18) {
    // BOA TARDE
    img.src = 'imagens/tarde-redonda.png'
    document.body.style.backgroundColor = '#FAA243'
} else {
    // BOA NOITE
    img.src = 'imagens/noite-redonda.png'
    document.body.style.backgroundColor = '#4D3A58'
}
}