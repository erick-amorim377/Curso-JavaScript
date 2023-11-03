//primitivos --> (imutaveis) string, number, boolean, undefined, null (bigint, symbol)
//Referência --> (mutáveis) arreys, object, function

//quando falamos de dados imutaveis significa que a variavel não pode muda mas o valor da variavel muda
//ex:

let nome = 'Luiz';//aqui eu dei o valor da variavel                  /E como se a variavel fosse uma caixa 
nome[0] = 'R';//aqui eu tentei mudar a variavel                      /e o valor da variavel fosse uma etiqueta 
console.log(nome[0], nome);//aqui da pra ver que não muda a variavel /a caixa não da pra mudar mas a etiqueta
nome = 'erick'//aqui eu mudei o valor da variavel                    /e possivel mudar
console.log(nome)

console.log('-------------------------------------------------------')

let a = 'A';
let b = a; //aqui eu fiz uma copia do valor de 'a' 
console.log(a, b);
a = 'X' //aqui eu mudei o valor de 'a' mas o valor de 'b' não muda 
console.log(a, b);

console.log('-------------------------------------------------------')

// mas quando acontece com referências e diferente

let a1 = [1, 2, 3]; //aqui eu dei o valor da arrey
let b1 = a1; // aqui eu copiei o valor da arrey, sendo assim 'a1' e 'b1' valem a mesma coisa
console.log(a1, b1);
a1.push(4); // aqui eu acrescentei mais coisa na minha arrey
console.log(a1, b1);// aqui podemos ver que tanto o 'a1' e 'b1' foram alteradas diferente do ex de cima
b1.pop();// aqui eu mudeio valor de 'b1' mas como eles são refencia 'a1' tmb muda
console.log(a1, b1)

console.log('-------------------------------------------------------')

let a2 = [9, 8, 7];
let b2 = [...a2]; // aqui eu to pedindo pra 'b2' ter o valor de 'a2' porém eles não ficam interligados
a2.push(10);
b2.pop();
console.log(a2, b2) 

console.log('-------------------------------------------------------')

let a3 = {
    nome: 'Luiz',
    sobrenome: 'Moraes' 
}
let b3 = a3//aqui o valor dos dois são iguais
a3.nome = 'erick' // aqui eu mudei o valor de 'a3' mas por consequencia vai mudar o valor de 'b3'
console.log(a3);
console.log(b3);

console.log('-------------------------------------------------------')

let a4 = {
    nome: 'Marcos',
    sobrenome: 'Moraes' 
};
let b4 = {...a4};  //aqui o valor dos dois são iguais
a4.nome = 'fernando'; // aqui eu mudei o valor de 'a3' mas por consequencia vai mudar o valor de 'b3'
console.log(a4);
console.log(b4);