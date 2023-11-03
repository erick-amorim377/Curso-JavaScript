const verdadeira = true;


//let tem escopo de bloco {...bloco}
//ou seja ele procura o bloco que ele está, se não estiver ele procura no 
//anterior e assim sucessivamente.

//var só tem escopo de função, isso significa que ela vai redeclarar a variavel
//com a minha ultima especificação.   ex:



let nome = 'luiz';
var nome2 = 'luiz';

if(verdadeira){
    let nome = 'otavio'
    var nome2 = 'marcos';
    console.log(nome, nome2);

    if(verdadeira){
        let nome = 'erick';
        var nome2 = 'enzo';
        console.log(nome, nome2);

    };
};

console.log(nome, nome2);

console.log('-----------------------------------------------------------------------------------------------------------------')

function falaOi (){
    var sobrenome = 'miranda'

    if(verdadeira){
        let nom = 'carlos'
        console.log(nom,sobrenome);
    }
    //console.log(nom);  aqui vai dar erro pois o Let só vai procurar nos blocos anteriores e não nos da frente
    console.log(sobrenome)
}
falaOi();

console.log('-----------------------------------------------------------------------------------------------------------------')

//quando damos valor para uma variavel depois de usar ela se usarmos o Var ele vai dar undefinde
//mas se usarmos o Let vai dar erro como deveria acontecer

console.log(afifi);
//console.log(cafunga); <------------------
                                       //aqui eu não coloquei o código para não dar erro
var afifi = 'adeus'                    // |
//let cafunga = 'carequinha'<--------------


