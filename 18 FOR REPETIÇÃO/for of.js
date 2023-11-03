const nome = ['Luiz', 'Otavio', 'Henrique'];

for(let i of nome) {     // aqui faz a mesma coisa que um for normal porém ele vai retornar apenas
    console.log(i);      // o valor da array ou string
}

console.log('--------------------------------------------')

nome.forEach(function(valor, indice, array) {   //posso usar o forEach e usar assim para pegar o valor,
    console.log(valor, indice, array);          //o indice e o array.
});

