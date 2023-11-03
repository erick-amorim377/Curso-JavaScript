const texTaref = document.querySelector('.nome-tarefa')
//const horTaref = document.querySelector('.hora-tarefa')
const addTaref = document.querySelector('.add-tarefa')
const listTare = document.querySelector('.lista-tarefas')

function criaLi(){
    const li = document.createElement('li'); 
    return li;
}
texTaref.addEventListener('keypress', function(e){
    if(e.keyCode === 13) {
        if(!texTaref.value) return;
        criaTra(texTaref.value);
    }
})

function limInput(){
    texTaref.value = ""
    texTaref.focus();
}
function bntApa(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'apagar'
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar);
};

function criaTra(texto){
    const li = criaLi();
    li.innerText = texto;
    listTare.appendChild(li);
    limInput();
    bntApa(li);
    salvaTaref();
}

addTaref.addEventListener('click', function() {
    if(!texTaref.value) return;
    criaTra(texTaref.value);

      
});
document.addEventListener('click', function(e){
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvaTaref()
        
    }
})

function salvaTaref(){
    const liTaref = listTare.querySelectorAll('li');
    const lis = [];

    for (let listTare of liTaref){
        let tarefaText = listTare.innerText;
        tarefaText = tarefaText.replace('apagar', '').trim();
        lis.push(tarefaText)
    }
    const tarefasJSON = JSON.stringify(lis);
    localStorage.setItem('tarefas', tarefasJSON);
  
}    

function addSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaTarefas = JSON.parse(tarefas);
    console.log(listaTarefas);

    for(let tarefa of listaTarefas) {
        criaTra();
    }
}
addSalvas();
