function mostraHora(){
    let data = new Date();

    return console.log(data.toLocaleTimeString('pt-BR', {
        hour12: false
    }));
}

const timer = setInterval(mostraHora, 1000); // <-- vai ser executado em um limite de tempo que seria em milesimo

setTimeout(function(){clearInterval(timer)}, 10000);// 
// setTimerout e a mesma cois que setInterval, porém ele so executa uma vez e na outra ele executa sempre
// clearInterval serve para acabar com timer infinito