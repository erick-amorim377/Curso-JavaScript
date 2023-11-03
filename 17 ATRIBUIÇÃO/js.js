console.log('Atribuição via Desestrutura (Arrays)');
// Atribuição via Desestrutura (Arrays)
const numeros = [100 , 200, 300, 400, 500, 600, 700, 800, 900];

const [um, dois , tres, ...resto] = numeros;
//aqui eu atribui uma variavel diferente para
//o primeiro, segundo e terceiro elementos da arreys
// e usamos '...resto' para pegar o resto da arrey
//                ^ 
// aqui e o nome da variavel que vai receber o resto   

console.log(um, dois, tres);
console.log(resto)

console.log('--------------------------------------------------------------------------------------------------------')

//podemos pular elementos da arrey e pegar apenas oq eu quiser

const num = [101 , 202, 303, 404, 505, 606, 707, 808, 909];
const [u, , t, , c, , s, , n] = num;
 
console.log(u, t, c, s, n);

console.log('--------------------------------------------------------------------------------------------------------')

// arreys dentros de arreys

//                 0           1          2
//              0  1  2     0  1  2    0  1  2
const num2 = [[ 1, 2, 3], [ 4, 5, 6], [7, 8, 9] ]
const [linta1, lista2, lista3] = num2 //aqui eu peguei cada arrey dentro da arrey principal
console.log(lista3[2]); //aqui eu pego os elementos das arreys que então dentro da arrey principal

console.log('--------------------------------------------------------------------------------------------------------')

console.log('Atribuição via Desestrutura (Objetos)');

// Atribuição via Desestrutura (Objetos)

const pessoa = {
    nome: 'erick',
    sobrenome: 'amorim',
    idade: 21,
    endereco: {
        rua: 'Duque de Bragança',
        numero: '16'
    }
}

//           | posso atribuir um valor para variavel para se não tiver essa variavel
//           v  no objeto não aparecer 'undefined'
const {nome='' , sobrenome: teste , ...rest} = pessoa;
//               usamos : para mudar o nome da variavel 
console.log(nome, teste, rest);

console.log('--------------------------------------------------------------------------------------------------------')


const {endereco:{rua='61', numero: nume}, endereco} = pessoa
console.log(rua, nume)
console.log(endereco)



