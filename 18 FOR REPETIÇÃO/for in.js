// O for in vai retornar o indice ou chave da array ou objeto ou string

const frutas = ['pera', 'maçã', 'uva'];

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

console.log('-------------------------------------------------------')

for (let ind in frutas){
    console.log(frutas[ind]);
}

//Ambos fazem a mesma função porém um e mais reduzida

console.log('-------------------------------------------------------')

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}