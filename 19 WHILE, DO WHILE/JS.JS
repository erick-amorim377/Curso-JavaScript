//while  ele e muito parecido com 'for'

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let ran = random(min, max);

while (ran !== 10) {         // tem que tomar cuidado pois tem que colocar um final se não fica infinito
    ran = random(min, max);  // e trava o computador
    console.log(ran);
}


do { //aqui o 'do while' vai realizar primeiro os codigos e depois vai ver a condição
    console.log(ran);
}while(ran !==10);
