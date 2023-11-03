//{} OBJETO
//[] ARREYS 
const pessoa1 = { //isso e um objeto para denominar uma pessoa
    nome1: 'luiz',
    sobrenome1: 'miranda',
    idade1: 25
}

const pessoa2 = { 
    nome2: 'erick',
    sobrenome2: 'amorim',
    idade2: 21
}
console.log(pessoa1.nome1) //assim eu posso chamar cada item nos objetos
console.log(pessoa2.sobrenome2)
// mas assim e ruim pois eu preciso criar manualmento cada obejeto pra cada pessoa
// para resolver podemos usar funcão assim:

console.log('-----------------------------------------------------------------------------------------')

function criarPessoa (nome, sobrenome, idade){ //aqui eu posso criar quantos objetos eu quiser de uma forma
    return {nome, sobrenome, idade}            //mais pratica e mais rapida
}

const pessoa01 = criarPessoa('ewerton','amorim', 26)
const pessoa02 = criarPessoa('zanza','asis', 40)
const pessoa03 =criarPessoa('elton','silva', 89)
const pessoa04 = criarPessoa('gabriela','magalhaes', 22)

console.log(pessoa01.sobrenome)
console.log(pessoa02.nome)
console.log(pessoa03.idade)
console.log(pessoa04.sobrenome)

console.log('-----------------------------------------------------------------------------------------')

const pess1 = { 
    nom: 'erick',
    sobrenom: 'amorim',
    ida: 21,
    
    fala() {
        console.log(`${this.nom} ${this.sobrenom} está falando oi`)
        console.log(`sua idade e ${this.ida} anos`)
    },

    incrementa() {
        this.ida++;
    }
}
pess1.fala() //aqui eu to falando para ele executar a função dentro do objeto
pess1.incrementa()//aqui eu pedi para executar a função que e acrescentar mais um
pess1.fala()//aqui a idade ja muda pois na linha de cima eu acrescentei um