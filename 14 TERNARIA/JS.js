//serve para incurtar ulguns codigos como 'if else'
//ex:
var pontos = 999;

if (pontos >= 1000){
    console.log('vip')
}
else{
    console.log('normal')
}

console.log('----------------------------------')//os dois são a mesma coisa

const nivel = pontos >= 1000 ? 'vip' : 'normal'
console.log(nivel)