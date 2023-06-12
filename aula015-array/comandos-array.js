let num = [1,5,4,8]
num[3] = [3] 
num.push(7) //Insere o val 7 na ultima posição
num.sort()//Deixa os numeros em ordem crescente

console.log(`Nosso vetor é o ${num} e tem ${num.length } posições` ) 

let pos = num.indexOf(4)
if(pos == -1){
    console.log(`O valor nao foi encontrado`)
}else{
    console.log(`o valor 4 está na posição: ${pos}`)
}


 