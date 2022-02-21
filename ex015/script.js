function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {  
                // kid
                img.setAttribute('src', 'imagens/criancahp.png')
            } else if (idade < 30) {
                // jovem
                img.setAttribute('src', 'imagens/jovemhp.png')
            } else if (idade < 60) {
                // adulto
                img.setAttribute('src', 'imagens/adultohp.png')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/idosohp.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {  
                // kid
                img.setAttribute('src', 'imagens/criancamp.png')
            } else if (idade < 30) {
                // jovem
                img.setAttribute('src', 'imagens/jovemmp.png')
            } else if (idade < 60) {
                // adulto
                img.setAttribute('src', 'imagens/adultomp.png')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/idosomp.png')
            }
        }
        res.innerHTML = `${genero} com ${idade} anos`
        res.appendChild(img)
    }
}