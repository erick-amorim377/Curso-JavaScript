const data = new Date('198-04-25 00:00:00');
let diaSemana = data.getDay();
let diaSemanaTexto;


//'switch' funciona como um 'if else'

switch(diaSemana){ //checando o valor dela
case 0://aqui eu to pedindo paraver se a let entre parenteses for igual a essa faça isso
    diaSemanaTexto = 'Domingo';
    break;//aqui eu falo que se for 'true' pare aqui
case 1:
    diaSemanaTexto = 'Segunda';
    break;
case 2:
    diaSemanaTexto = 'Terça';
    break;
case 3:
    diaSemanaTexto = '  Quarta';
    break;
case 4:
    diaSemanaTexto = 'Quinta';
    break;
case 5:
    diaSemanaTexto = 'Sexta';
    break;
case 6:
    diaSemanaTexto = 'Sabado';
    break;
default://aqui serve como o 'else'
    diaSemanaTexto = '';
    break
}

console.log(diaSemana,diaSemanaTexto)