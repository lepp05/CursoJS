let num = [5,2,3]

num.push(7)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posições`)

//para mostrar os elementos de forma simplificada
for(let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}

//ou podemos fazer assim
for (let pos in num){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}
 