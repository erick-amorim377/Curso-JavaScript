const elementos = [
    {tag: 'p', texto: 'qualquer texto'},
    {tag: 'div', texto: 'texto2'},
    {tag: 'section', texto: 'texto3'},
    {tag: 'footer', texto: 'texto4'},
];

const conteiner = document.querySelector('.conteiner');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
}

conteiner.appendChild(div);