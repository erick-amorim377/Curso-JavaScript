// aqui eu mando o programa executar um codigo, se ele der problema vai executar o 'catch'
try{
    console.log(naoExiste);    // È executado quando não há erros

}catch(err){
    console.log('não existe'); // È executado quando há erros
}
finally {
                               // È executado sempre
}

console.log('----------------------------------------------------------------------------------------')

function soma(x, y){
    if ( typeof x !== 'number' || typeof y !== 'number' ) {
        throw new Error('x e y precisam ser numeros'); // esse new serve para mostrar o erro e onde esta o erro
    }                                                  // ReferenceError()
    return x + y
}

try{
console.log(soma(1, 3));
console.log(soma('1', 2));
}catch(erro){
    console.log(erro);
}

console.log('----------------------------------------------------------------------------------------')

try{
    console.log(a)
    console.log('Abri um arquivo')
    console.log('Manipulei o arquivo e gerou erro')
    console.log('fechou o arquivo')
} catch{
    console.log('tratando o erro')
} finally{
    console.log('FINALLY: Eu sempre sou executado')
}

console.log('----------------------------------------------------------------------------------------')

function retornaHora(data){
    if(!(data instanceof Date)){
        console.log('Não é')
    }
    else{
        console.log('e sim')
    }
}

retornaHora(new Date());