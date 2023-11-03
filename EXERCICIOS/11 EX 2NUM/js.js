const nun1 = document.querySelector('.input');

function numeros (evento){
    evento.preventDefault();
    
    const ex1 = nun1.querySelector('numForm');
    const ex2 = nun1.querySelector('.numForm2');

    if (ex1 > ex2){
        console.log(`entre ${ex1} e ${ex2} o maior e o: ${nun1}`)
    }
    if (ex1 < ex2){
       console.log(`entre ${ex1} e ${ex2} o maior e o: ${ex2}`)
    }

    nun1.addEventListener('submit', numeros)
}
