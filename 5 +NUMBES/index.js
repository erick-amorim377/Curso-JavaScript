// .toString() --> transforma o numero em string
// .toString(2) --> transforma o numero em binario
// .toFixed(2) --> vai arredondar o valor flutuante e mostras as casar decimais que eu quiser
// Number.isInteger() --> vai mostra 'true' para numeros inteiros e 'false' para numeros flutuantes
// Number.isNan() --> mostras 'true' para contas que não tem numeros e 'false' para contas normais 
// parseInt(); --> vai transformar em um numero inteiro
// parseFloat(); --> vai transformar em um numero quebrado
// number(); -- vai entender o numero que esta ali, não importando se e inteiro ou não


// num1 = Number(num1.tofixed(2)); --> conserta um erro na soma de numeros flutuantes

let num01 = 20
let num0 = 50
let num1 = 50.876543467678567
let num2 = 'oie'

console.log(num0.toString()+ num01);
console.log(num0.toString(2));
console.log(num1.toFixed(2));
console.log(Number.isInteger(num0, num1))
console.log(Number.isNaN(num0, num1, num2))

console.log('-------------------------------------------------------------------------------------------')

let fun1 = 0.7
let fun2 = 0.1

fun1 += fun2; // 0.8
fun1 += fun2; // 0.9
fun1 += fun2; // 1.0

// mas o resultado fica 0.999999999999999999
//para resolver basta usar:

 fun1 = Number(fun1.toFixed(2));

console.log(fun1)