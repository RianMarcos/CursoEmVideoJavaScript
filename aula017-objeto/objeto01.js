let amigo = {nome:'Rian',Age:21,peso:71,engordar(p=0){
    console.log('Ficou forte') 
    this.peso += p} //this pq é um atributo de amigo
}
amigo.engordar(5) //atribui 5kg ao peso
console.log(typeof amigo) //tipo da var
console.log(amigo) //printa o objeto
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)