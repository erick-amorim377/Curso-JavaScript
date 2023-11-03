// a estring funciona assim
//              012345678910
//const nome = "Luiz Otavio"

// arreys são diferentes ex:
console.log('-------------------------------------------------------------')

//                 1       2       3
const alunos = ['luiz', 'Maria', 'João']
console.log(alunos);      // aqui vai exibir todos os objetos dos arreys
console.log(alunos[0]);   // aqui vai exibir só a arreys que eu quiser


// posso mudar  ou adicionar as arreys assim:

console.log('-------------------------------------------------------------')
alunos[3] = 'Erick' // aqui eu adicionei pois não existia arrey 3. obs: assim e falho pois vc precisa saber 
                    //                                                  numeros de arreys contido no objeto
alunos[0] = 'Eduardo' //aqui eu mudei
console.log(alunos)


// posso usar o .push para adicionar mais arreys no final, assim semprecisar saber o numero de arreys

console.log('-------------------------------------------------------------')
alunos.push('luiz')
console.log(alunos)


// posso usar o .unshift para adicionar mais arreys no começo.

console.log('-------------------------------------------------------------')
alunos.unshift('ferdinando')
console.log(alunos)
console.log('-------------------------------------------------------------')

// posso usar o .pop para remover a ultima arrey. ex:

alunos.pop()
console.log(alunos)
//const removido = alunos.pop(); pode ser usada assim para ter duas arreys
console.log('-------------------------------------------------------------')

// posso usar o .shift para remover o primeiro elemento

alunos.shift()
//const removido = alunos.shift(); pode ser usada assim para ter duas arreys
console.log(alunos)
console.log('-------------------------------------------------------------')

// posso usar delete para deletar um elemento da arrey


//delete alunos[1] aqui vai remover o elemento mas vai ficar vazia
//console.log(alunos)


// posso usar o .length para saber o tamanho da array assim

console.log('numeros de arreys -->', alunos.length)
alunos.unshift('ferdinando')
console.log(alunos) //,'ferdinando','Eduardo', 'Maria', 'João', 'Erick'
console.log('-------------------------------------------------------------')

// posso pegar um elemento ate outros elemento ex:
console.log(alunos.slice(1, 4))//ele elimina um então se você quer ir de 'Eduardo' até 'João' deve usa (1,4) 
console.log('-------------------------------------------------------------')

//posso perguntar se isso e um arrey usando assim:
console.log('e uma array?', alunos instanceof Array);
// arrays só são strings