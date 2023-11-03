 function nois(){
    const butao = document.querySelector('.butao')
    const resul = document.querySelector('.resultado')
    // const altura = document.querySelector('.altura')
    const in1 = document.querySelector('.in1');

    function rece(evento){
        evento.preventDefault();

        const peso = in1.querySelector('.peso');
        const altura = in1.querySelector('.altura');

        const imc = Number(peso.value / (altura.value*altura.value));

        


        //resul.innerHTML = `<p>Seu IMC e ${imc.toFixed(2)} </p> `;
        console.log(imc)
        //resul.classList.add('bad'); serve para adicionar uma class no html
        
        
        
        if( imc> 0 && imc < 18.5){
            resul.innerHTML = `<p>Seu IMC e ${imc.toFixed(2)} (abaixo do peso)</p> `;
            resul.classList.add('good')
        }
        else if(imc >= 18.5 && imc <= 24.9){
            resul.innerHTML = `<p>Seu IMC e ${imc.toFixed(2)} (peso normal)</p>`;
            resul.classList.add('good')
        }
        else if(imc >= 25 && imc <= 29.9){
            resul.innerHTML = `<p>Seu IMC e ${imc.toFixed(2)} (sobrepeso)</p> `;
            resul.classList.add('good')
        }
        else if(imc >= 30 && imc <= 34.9){
            resul.innerHTML = `<p>Seu IMC e ${imc.toFixed(2)} (Obesidade grau 1)</p> `;
            resul.classList.add('good')
        }
        else if(imc >= 35 && imc <= 39.9){
            resul.innerHTML = `<p>Seu IMC e ${imc.toFixed(2)} (Obesidade grau 2)</p> `;
            resul.classList.add('good')
        }
        else if(imc >= 40 ){
            resul.innerHTML = `<p>Seu IMC e ${imc.toFixed(2)} (Obesidade grau 3)</p> `;
            resul.classList.add('good')
        }
        else{
            resul.innerHTML = `<p class='bad'>invalido</p> `;
        }

     }
    
    in1.addEventListener('submit', rece);
}; 
nois()

const h1 = document.querySelector('.cont h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h1.innerHTML = data.toLocaleString('pt-BR', opcoes);
