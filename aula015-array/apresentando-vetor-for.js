let num = [1,5,4,8]

console.log(num)

/*
for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

//Fazendo simplificado
for(let pos in num){ //For simplificado
    console.log(`A opsição ${pos} tem o valor ${num[pos]}`)
}

