var agora = new Date()
var diaSem = agora.getDay()

/*
Em JavaScript os dias da semana são:
    Domingo = 0
    Segunda = 1
    Terça = 2
    Quarta = 3
    Quinta = 4
    Sexta = 5
    Sábado = 6
*/
console.log(diaSem)

switch(diaSem){
    case 0:
        console.log("Dom")
        break //obrigatório!
    case 1:
        console.log("Seg")
        break
    case 2:
        console.log("Terça")
        break
    case 3:
        console.log("Quarta")
        break
    case 4:
        console.log("Quinta")
        break
    case 5:
        console.log("Sex")
        break
    case 6:
        console.log("Sab")
        break
    default:
        console.log("[ERRO] Dia inválido")
        break
}