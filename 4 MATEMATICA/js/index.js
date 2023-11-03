// + --> soma                         +=, -=, *=, /=, **=, etc...
// - --> subtração                        isso vai realizar a operação aritimetica e depois 
// * --> multiplicação                     vai colocar o valor da contante no resultado da operação
// / --> divisão
// % --> resto da divisão
// ** --> potenciação
// ++ --> vai somar 1 na variavel    obs: não funciona na const
//-- ==> mesma coisa que o '++' [   obs2: a posição altera um pouco ex:
//       mas em vez de somar 1  [                      
//       ele diminui 1          [         let contador = 1           terminal:   
//                              [         console.log(contador++)     1
//                              [        
//                              [       mas se usarmos assim:
//                              [                                           
//                              [         let contador = 1           terminal:
//                              [         console.log(++contador)     2    
//                              [        
//                              [       isso muda pois o leitor do javascript leu primeiro a variavel e depos acrescentou 1   
//                              [       mas no segundo exemplo ele acrescentou 1 e depois leu a variavel.

let num0 = 2+2
let num1 = 2-2
let num2 = 2*2
let num3 = 2/2
let num4 = 5%3
let num5 = 2**2
let num6 = ++2
let num7 = --2

console.log(num0, num1, num2, num3, num4, num5, num6, num7)