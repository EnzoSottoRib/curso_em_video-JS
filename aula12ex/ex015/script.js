function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || (fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                //jove
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                //dulto
                img.setAttribute('src', 'foto-aduto-m.png')
            } else {
                //doso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                //jove
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                //dulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //doso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}