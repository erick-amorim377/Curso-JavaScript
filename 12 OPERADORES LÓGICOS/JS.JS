/*
Operadores Lógicos
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/
console.log(true && true && true && true);// todas tem que estar 'true' para dar 'true'
                                          // se uma for 'falso' vai dar tudo 'falso'
console.log(true && true && false && true);
                                           // e possivel usar em uma expressão tambem
console.log('------------------------------------------------------------');
const expre = true && true && true && true;
const expre1 = true && true && false && true;
console.log(expre, expre1);

//aqui e como se fosse logar em uma rede social, para logar precisa dar os cois 'true', se um der false 
// não vai logar na conta

console.log('------------------------------------------------------------');

console.log(true || true || true || true);// todas tem que estar 'false' para dar 'false'
                                          // se uma for 'true' vai dar tudo 'true'
console.log(false || true || false || false);

//aqui e como se eu fizesse algumas condições, se pelo menos uma das condições estiver boa(ou seja 'true')
// ela ja vai executar a ação

console.log('------------------------------------------------------------');

console.log(false,'aqui se eu usar ! vai alterar ao contrario', !false)
// aqui altera para o oposto da que eu quiser 'true' vira 'false' e vice versa
//eu posso negar quantas vezes eu quiser mas não e muito utilizado ex:
console.log('ex: ', !!false,"aqui negei duas vezes, portanto não alterou em nada")
console.log('ex: ', !!!false,"aqui negei três vezes, portanto e como se eu tivesse negado só uma vez")

console.log('------------------------------------------------------------');

// tudo no javascript pode ser avaliado como 'true' ou 'false'

// são chamado de FALSY:       qualquer cois diferente desses e 
// ''   ""   ``                considerado o valor de 'true'
// null / undefined
// NaN
 
//-------------------------------------------------------------------------------------------

// o '||' vai mostrar o primeiro 'true' na expressão ex:
console.log( null || 0 || 'erick' || true);
// um exemplo bom para explicar e esse:
// digamos que no site queremos que o usuario escolha a cor do site
// para fazermos isso usariamos "if else" mas para ficar melhor podemos
// usar o '||' para simplificar o código

const corUsu = null; // aqui eu seto a cor como null para o usuario poder mudar
const corpad = corUsu || 'red'; // aqui se o usuario não setar a cor vai usar o red pois ele e 'true'
                                // e a variavel 'corUsu' so vai ser 'true' se o usuario setar a cor
                                // pois 'null' tem o valor de false

