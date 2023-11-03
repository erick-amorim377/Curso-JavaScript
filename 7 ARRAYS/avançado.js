// usando o splice
//                              indices
//               -5      -4        -3         -2         -1
//                0       1         2          3          4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Juliana'];
// nome.splice(indice, delete, elem1, elem2, elem3);

const remov = nomes.splice(2, 2, 'Erick', 'Jean');
console.log(nomes, remov)

//-----------------------------------------------------------------
// concantenando duas arreys

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, 'luiz', [7, 8, 9]);//concatenei as duas arreys e adicioneis outras coisas
const a4 = [...a1, ...a2,'Luiz', ...[7, 8, 9]];
console.log(a3);
console.log(a4);

//-----------------------------------------------------------------
//filtrar a arrey usando '.filter'

const numeros =[5, 50, 80, 1, 2, 3, 5, 6, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor >10);
console.log(numerosFiltrados)




