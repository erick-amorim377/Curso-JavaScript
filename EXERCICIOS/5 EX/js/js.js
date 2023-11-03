let num1 = Number(prompt('digite um numero'));
let numtitu = document.getElementById('num-titu')
let tex0 = document.getElementById('texto')


numtitu.innerHTML = num1
tex0.innerHTML += `<p>Raiz quadrada: ${num1 ** 0.5}</p> `
tex0.innerHTML += `<p> ${num1} é inteiro? ${Number.isInteger(num1)}</p>`
tex0.innerHTML += `<p>É NaN: ${Number.isNaN(num1)} </p>`
tex0.innerHTML += `<p>Arredondando pra cima: ${Math.ceil(num1)}</p>`
tex0.innerHTML += `<p>Arredondando pra baixo: ${Math.floor(num1)}</p>`
tex0.innerHTML += `<p>Com duas casas decimais: ${num1.toFixed(2)}</p>`

