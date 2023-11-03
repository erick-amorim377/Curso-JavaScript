 //sempre que uso o 'new' e sobre uma função construtor, nesse caso o Date
const date = new Date(); //aqui eu to pedindo a data atual
console.log(date);

console.log('-----------------------------------------------------------------------------------')

const ta = new Date(90000); // aqui eu to somando os milisegundos a partir da data 01/01/1970
console.log(ta)
//ele corrigo pois não existe 60seg pois isso ja e 1min, então ele ja transforma

console.log('-----------------------------------------------------------------------------------')

//*padrão*
//   new Date("year,month,day,hours,minutes,seconds,ms")
const d = new Date(2018, 11, 24, 18, 33, 30, 0);
console.log(d)
const da = new Date(2018, 11);// esse e o minimos que posso omitir de data pois se eu 
                              //omitir o mês ja vai virar milisegundos
console.log(da)
// O mês aqui começa do 0(janeiro) e vai ate 11(dezembro)

console.log('-----------------------------------------------------------------------------------')

//o formato mais usado e esse e igual ao de cima
//                       a   m  d  h  mi s  ms
const datta = new Date('2019-04-20 20:20:20 1000')
console.log(datta)

console.log('-----------------------------------------------------------------------------------')

console.log('dia',date.getDate());
console.log('mês',date.getMonth() + 1);
console.log('Ano',date.getFullYear());
console.log('Hora',date.getHours());
console.log('Minuto',date.getMinutes());
console.log('Segundos',date.getSeconds());
console.log('Milisegundos',date.getMilliseconds());
console.log('Dia semana',date.getDay());//0-domingo 6-sabado
console.log(Date.now())







 