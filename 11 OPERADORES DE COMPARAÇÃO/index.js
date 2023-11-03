/*
Operadores de comparação
> maior que
>= maior ou igual a 
< menor que
<= menor ou igual a
== igualdade (valor) *****************
=== igualdade (valor e tipo)
!= diferente (valor) *************
!== diferente (valor e tipo)
*/

const num = 20 > 5;
const num1 = 15 > 30;
console.log(num,'= num', num1, '= num1'); //aqui e usado pra fazer uma pergunta então vai ter uma resposta 'true' ou 'false'

console.log('-----------------------------------------------------------------------------------');

const num2 = 20 < 5;
const num3 = 15 < 30;
console.log(num2,'= num2', num3,'= num3');

console.log('-----------------------------------------------------------------------------------');

const num4 = 25 >= 5;
const num5 = 10 >= 30;
console.log(num4,'= num4' , num5,'= num5');

console.log('-----------------------------------------------------------------------------------');

const num6 = 25 <= 5;
const num7 = 10 <= 30;
console.log(num6, '= num6', num7,'= num7');

console.log('-----------------------------------------------------------------------------------');

const num8 = 25 == 25;
const num9 = 25 == 11;
console.log(num8,'= num8', num9,"= num9");

console.log('-----------------------------------------------------------------------------------');

const num10 = 25 == '25'; // mas usar  o sinal '==' não e aconselhaveu  pois quando isso acontece o programa vai dar 'true'
const num11 = 25 === '25';// pois ele deduz que vc quer comparar um numero com outro mesmo o outro sendo string mas quando
console.log(num10,'= num10', num11,"= num11");// usamos o sinal '===' ele não vai so comparar mas ver o tipo então vai dar 'false'

console.log('-----------------------------------------------------------------------------------');

const num12 = 25 != 25;
const num13 = 25 != 11;
console.log(num12,'= num12', num13,"= num13");

console.log('-----------------------------------------------------------------------------------');

const num14 = 25 != '25'; // mas usar  o sinal '!=' não e aconselhaveu  pois quando isso acontece o programa vai dar 'true'
const num15 = 25 !== '25';// pois ele deduz que vc quer comparar um numero com outro mesmo o outro sendo string mas quando
console.log(num14,'= num14', num15,"= num15");// usamos o sinal '==' ele não vai so comparar mas ver o tipo então vai dar 'false'

console.log('-----------------------------------------------------------------------------------');


