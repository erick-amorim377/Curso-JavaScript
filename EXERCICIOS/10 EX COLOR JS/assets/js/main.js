const paragrafos =document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;  // 'backgroundColor' e um codigo do css
    p.style.color = '#ffffff';     //'color' e um codigo do CSS
}