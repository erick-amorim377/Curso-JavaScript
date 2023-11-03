function sauda(nome){    //função e as linhas de programação que vai ficar salva na memoria e da pra reutilizar
    console.log(`mata o ${nome}`)   //essa função vai ficar na memoria e eu sempre posso chamar ela usando o nome da 
                                    //função

}

sauda('erick')   // eu posso colocar uma variavel pra ser sempre acrescentada na função

console.log('-------------------------------------------------------------------------------')
function legal(nom){   
    //console.log(`acho ${nom} muito gostoso`) 
    return `acho ${nom} muito gostoso`   //as funções por padrão não retornam nada então precisamos usar esse codigo para 
}                                        // retornar alguma coisa

const vari = legal('biscoito') 
console.log(vari);   // aqui eu pedi pra executar minha função e essa função retornou uma variavel

console.log('-------------------------------------------------------------------------------')

//não e possivel usar as variaveis dentro da função mas e possivel usar variaveis já criadas fora da função
//dentro dessa função

var sobrenome = 'Amorim'

function mentos(){
    console.log(sobrenome);
}

mentos();

console.log('-------------------------------------------------------------------------------')

//exemplo de função:

function soma(x, y){
    const val = x * y   // tudo que esta aqui está protegido, nós não podemos puxar ele fora dessa função
    const varr = x + y  // ex: 1
    const leel = val + varr
    return leel   // tudo que está abaixo do return não será executado, só acima do return
    console.log('isso não será executado') 
}
//console.log(leel); aqui eu tento puxar uma variavel de dentro da função mas isso da erro no programa

console.log(soma(3, 6)); 
console.log(soma(9, 3));
console.log(soma(1));  //se eu não enviar nenhum valor ou enviar apenas um valor não vai dar erro
console.log(soma());   //mas vai aparecer 'NaN'
                    //  para evitar isso podemos usar assim:

console.log('--------------------------------------------------------------------------------------')
 function samos(x = 1, y = 2){ //aqui se eu não colocar o valor de x ou y eles vão ser igual a esses
    const val = x + y   
    const varr = x + y  
    const leeu = val + varr
    return leeu
 }

console.log(samos()); //     x=1  y=2
console.log(samos(5));//     x=5  y=2 
console.log(samos(9, 8));//  x=9  y=8

console.log('--------------------------------------------------------------------------------------')

const raiz = function(n){ 
    return n ** 0.5
}

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

console.log('--------------------------------------------------------------------------------------')
// outra forma de cria funções 
const laele = (m) => m ** 0.5

console.log(laele(9));
console.log(laele(16));
console.log(laele(25));



