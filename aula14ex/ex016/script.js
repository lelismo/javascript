function contar() {
    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let pas = document.getElementById('txtpas')
    let res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.lenght == 0 || pas.value.lenght == 0) {
        alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = "Contando: "
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (i < f) {
            for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} `
            }
        } else {
            for(let c = i; c >= f; c -= p) {
            res.innerHTML += `${c} `
            }
        }
    }
}