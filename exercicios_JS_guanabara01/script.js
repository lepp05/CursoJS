function verificar(){
    const data = new Date()
    const ano = data.getFullYear()
    const fano = document.getElementById('txtano')
    const res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO]')
    } else{
        const fsex = document.getElementsByName('radsex')
        const idade = ano - Number(fano.value)
        let genero = ''
        const img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'imgs/criançaH.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imgs/jovemH.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imgs/adultoH.png')
            }else{
                //idoso
                img.setAttribute('src', 'imgs/idosoH.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'imgs/criançaM.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imgs/jovemM.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imgs/adultoM.png')
            }else{
                //idoso
                img.setAttribute('src', 'imgs/idosaM.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Vc é ${genero} com ${idade} anos <br>`
        res.appendChild(img)
    }
}