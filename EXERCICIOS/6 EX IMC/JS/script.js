function enviarform() {
    const form = document.querySelector('.form'); //to buscando o form do HTML 
    const resultado = document.querySelector('.resultado');//to buscando a div do HTML
    

    function recebeform(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const idade = form.querySelector('.idade');

        
        
        console.log(nome.value, sobrenome.value, peso.value, idade.value);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${idade.value}</p> `;
        }

    form.addEventListener('submit', recebeform);// aqui eu to falando para quando houver o evento de
                                                //apertar o submit aplicar o 'recebeform'
};
enviarform();
