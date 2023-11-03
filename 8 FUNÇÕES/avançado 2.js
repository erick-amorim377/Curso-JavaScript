function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        fala(assunto) {
            return `${nome} ${sobrenome} está falando ${assunto}`;
        },
        altura: a,
        peso: p, 
        get imc(){ //quanto usamos o get ele transforma em um atributo do objeto
            const indce = this.peso / (this.altura**2);
            return indce.toFixed(2);

        },
        set falaNom(valor){ // aqui o set precisamos dar o valor da função *
            this.nome = valor
            console.log(valor)
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.79, 100); //o this. fixa o valor das variaveis
//nessa função eu 

console.log(p1.fala('java script'));
console.log(p1.imc);


const p2 = criaPessoa('Maria', 'Joaquina', 1.65, 59);

console.log(p2.fala('java script'));
console.log(p2.imc);
criaPessoa.falaNom = 'erick'  // aqui nos damos o valor *
console.log(criaPessoa.falaNom);