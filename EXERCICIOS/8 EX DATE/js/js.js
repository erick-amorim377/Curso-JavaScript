// const h1 = document.querySelector('.cont h1');
// const data = new Date;

// function getDiaSemanaTexto(diaSemana){
//     let diaSemanaTexto;
    
//     switch (diaSemana) {
//     case 0:
//         diaSemanaTexto = 'Domingo';
//         return diaSemanaTexto
//     case 1:
//         diaSemanaTexto = 'Segunda-feira';
//         return diaSemanaTexto
//     case 2:
//         diaSemanaTexto = 'Terça-feira';
//         return diaSemanaTexto
//     case 3:
//         diaSemanaTexto = 'Quarta-feira';
//         return diaSemanaTexto
//     case 4:
//         diaSemanaTexto = 'Quinta-feira';
//         return diaSemanaTexto
//     case 5:
//         diaSemanaTexto = 'Sexta-feira';
//         return diaSemanaTexto
//     case 6:
//         diaSemanaTexto = 'Sábado';
//         return diaSemanaTexto    
//     }
// }

// function getMêsTexto(mêsSemana){
//     let mesSemanaTexto;
    
//     switch (mêsSemana) {
//     case 0:
//         mesSemanaTexto = 'Janeiro';
//         return mesSemanaTexto
//     case 1:
//         mesSemanaTexto = 'Fevereiro';
//         return mesSemanaTexto
//     case 2:
//         mesSemanaTexto = 'Março';
//         return mesSemanaTexto
//     case 3:
//         mesSemanaTexto = 'Abril';
//         return mesSemanaTexto
//     case 4:
//         mesSemanaTexto = 'Maio';
//         return mesSemanaTexto
//     case 5:
//         mesSemanaTexto = 'Junho';
//         return mesSemanaTexto
//     case 6:
//         mesSemanaTexto = 'Sábado';
//         return mesSemanaTexto    
//     case 7:
//         mesSemanaTexto = 'Agosto';
//         return mesSemanaTexto    
//     case 8:
//         mesSemanaTexto = 'Setembro';
//         return mesSemanaTexto    
//     case 9:
//         mesSemanaTexto = 'Outubro';
//         return mesSemanaTexto    
//     case 10:
//         mesSemanaTexto = 'Novembro';
//         return mesSemanaTexto    
//     case 11:
//         mesSemanaTexto = 'Dezembro';
//         return mesSemanaTexto      
//     }
// }

// // function zeroAEsquerda(num) {
// //     return num >= 10 ? num : `0${num}`;
// // }

// function criarData(data){
//     const dia = data.getDay();
//     const mes = data.getMonth();
//     const did = data.getDate();

//     const nomeDia = getDiaSemanaTexto(dia);
//     const nomeMes = getMêsTexto(mes);

//     return `${nomeDia}, ${did} de ${nomeMes}` + ` de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()} ` 
// }

// h1.innerHTML = criarData(data);

//todo o codigo de cima resumido kkk
const h1 = document.querySelector('.cont h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h1.innerHTML = data.toLocaleString('pt-BR', opcoes);
