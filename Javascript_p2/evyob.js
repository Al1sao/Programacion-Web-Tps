const lista = document.getElementById('lista-colores');

const colores = {
  blanco: 'white',
  negro: 'black',
  azul: 'blue',
  rojo: 'red',
  amarillo: 'yellow'
  
};
const texto = {
  blanco: 'black',
};
const items = lista.getElementsByTagName('li');

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('mouseover', () => {
    let color = items[i].innerText.toLowerCase();
    lista.style.backgroundColor = colores[color];
  });
};