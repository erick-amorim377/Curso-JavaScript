// BREAL CONTINUE

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numeros of num){
    
    if (numeros === 2){//   <-- quando num for igual a 2 vai executar aquilo
        console.log('pulei o numero 2')
        continue; //   <-- aqui eu to falando para não executar o resto e continuar com o código
    }

    
    if (numeros === 7){
        console.log('7"s');  // será executado pois está acima do break
        break;
    }

    console.log(numeros); //não seá executado pois esta abaixo do break
}