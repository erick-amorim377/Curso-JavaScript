 //podemos usar uma função como variavel
 const souUmDado = function(){
    console.log('sou um dado');
 };
 
 function executaFuncao(funcao){
    console.log('a função:')
    funcao();
 }
 executaFuncao(souUmDado);
 
 
 
 //Arrow function
 const funcaoArrow = () => {
    console.log('sou uma arrow function');
 };
 
 console.log('=================================================================================================================')

function funcao() {
    console.log('oie')
    console.log(arguments)//o 'arguments' vai usar todos os parametros que receber.
    console.log(arguments[0])// aqui eu peço qual parametros eu posso usar 
}
funcao('valor',1,2,3,4,5,6,7,8,9)//não importa se os parametros que eu envio não for usados, não da erro.

console.log('=================================================================================================================')

// no caso se não dermos o valor do 'c' ele fica com o valor de '2' automaticamente.
function funFun(a, b = 99999999 ,c = 2){
   console.log(a + b + c);

}
funFun(2 , 2);

console.log('=================================================================================================================')

// posso usar o undefined para pular valor na sequencia da função
// e usamos o null para por o valor de 0
function defante(a, b , c = 3, d) {
   console.log(a + b + c + d);
}
defante( null, 2, undefined, 4);

console.log('=================================================================================================================')

//usamos objetos e arreys da mesma forma
function tresK([valor1, valor2, valor3]){
   console.log( valor1, valor2, valor3)

}
const bosta = ['erick', 'amorim', '22'];
tresK(bosta);

console.log('=================================================================================================================')

// podemos usar o '...' para ele pegar todo o resto dos argumentos, e ele sempre tem que ser o ultimo
function dilera(ope, acumu, ...numeros) {
   console.log(ope, acumu, numeros)
}
dilera('+', 0, 10, 20, 30, 40, 50, 60);

console.log('=================================================================================================================')

//usamos função tmb funções dentro de funções
 
function criarMultiplicador(x){
   return function (m){
     return m * x;
   };
};
const duplica = criarMultiplicador(2);
const triplica = criarMultiplicador(3);
const quadriplica = criarMultiplicador(4);

console.log(duplica(3));
console.log(triplica(5));
console.log(quadriplica(5));

console.log('=================================================================================================================')

//escopo lexico

// a function vai buscando no pai e depois do pai do pai e assim em diante.

const nome = 'Luiz'

function falaNome(){
   const nome = 'erick' // a funtion busca a primeira variavel as demais com o mesmos nome ele ignora
   console.log(nome);
}

function usaFalaNome(){
   const nome = 'otavio' // esse não e usado pois a função que está sendo usado e a outra
   falaNome();
}
usaFalaNome();

console.log('=================================================================================================================')

//callback
// as vezes o javascript pode demorar para aplicar uma ação pois ele tem que ir no banco de dados e etc
//então ele aplica os codigos primeiros

function rand(min = 1000, max = 3000) {
   const num = Math.random() * (max - min) + min;
   return Math.floor(num);
} //serve para criar um numero aleatorio

function f1(callback) {
   setTimeout(function() {
      console.log('f1')
      if (callback) callback()
   }, rand());
}

function f2(callback) {
   setTimeout(function() {
      console.log('f2')
      if (callback) callback()
   }, rand());
}

function f3(callback) {
   setTimeout(function() {
      console.log('f3')
      if (callback) callback()
   }, rand());
}


console.log('-=-=-=-=-=-=-=-=-=-=-=')

f1(callf1);
function callf1(){
   f2(callf2);
}
function callf2(){
   f3(callf3);
}
function callf3(){
   console.log('olá');
}

console.log('=================================================================================================================')

// funções imediatas
//nós precisamos usar a função para que a variaveis não alteram no scopo global
//então usamos uma função anonima

(function(){
   const mama = 'silva'
   function criaMama(nono){
      return nono + ' ' + mama;  
   };
   
   function mandaMama(){
      console.log(criaMama('elton'));
   }
   mandaMama();
})


