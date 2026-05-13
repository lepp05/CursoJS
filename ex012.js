var hora = 12
console.log(`agora são exatamente ${hora} horas. `)
if(hora < 12 && hora >= 6){
    console.log('Bom dia')
} if (hora >= 12 && hora < 18){
    console.log('Boa tarde')
}if(hora < 6 || hora > 18){
    console.log('Boa noite')
}