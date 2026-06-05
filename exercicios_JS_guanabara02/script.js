function carregar(){
const msg = document.getElementById('msg')
const img = document.getElementById('img')
const data = new Date()
const hora = data.getHours()
//const hora = 19
msg.innerHTML= `Agora são ${hora} horas`

if (hora >= 0 && hora < 12) {
    //bom dia
    img.src ='fotomanhã.png'
    document.body.style.background = '#F4A460'
} else if(hora>= 12 && hora < 18) {
    //boa tarde
    img.src ='fototarde.png'
    document.body.style.background = '#90ec17'
} else {
    //boa noite
    img.src = 'fotonoite.png'
    document.body.style.background = '#0c2058'
}
}

