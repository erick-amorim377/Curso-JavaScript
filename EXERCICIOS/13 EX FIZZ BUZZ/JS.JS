function fizzBuzz (num1){

if (num1 % 3 === 0 && num1 % 5 !== 0 ) {
    console.log(`o numero ${num1} e divisivel por 3`);
}
if(num1 % 5 === 0 && num1 % 3 !== 0 ) {
    console.log(`o numero ${num1} e divisivel por 5`);
}
if(num1 % 3 == 0 && num1 % 5 == 0) {
    console.log(`o numero ${num1} e divisivel por 3 e por 5`);
}
if(num1 % 3 !== 0 && num1 % 5 !== 0 && typeof num1 !== 'string') {
    console.log(`o numero ${num1} NÃO e divisivel por 3 e por 5`);
}
if(typeof num1 === 'string'){
    console.log(`O ${num1} não e um numero`);
}

}

for (let i = 0; i <= 100; i++ ) {
    console.log(i);
    fizzBuzz(i)
}