// If pode se usado sozinho
//sempre que utilizo a palavra else, preciso de um if antes
//eu posso ter varios else if na checagem
// so posso ter um else no final da checagem

//if else são condições que eu quero que o programa realize

// O 'if else' vai executar a primeira alternativa verdadeira
// portanto se houver duas que for verdadeira vai executar 
// a primeira que for verdadeira e a outra não será

// entre 0 - 11 -> bom dia
// entre 12 - 17 -> boa tarde
// entre 18 - 23 -> boa noite

const hora = 13;

if(hora >= 0 && hora <=11){
    console.log('bom dia!')

}
else if(hora>=12 && hora <= 17){
    console.log('boa tarde!')
}
else if(hora>=18 && hora <= 23){
    console.log('boa noite!')
}
else{
    console.log('olá')
}