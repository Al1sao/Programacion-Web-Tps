function esPrimo(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true; //Ojala se pudieran usar globales (No se como usarlas en JS)
}
function listarPrimos() {
  const primosDiv = document.getElementById('primos');
  let primosTexto = '';
  for (let i = 2; i < 100; i++) {
    if (esPrimo(i)) {
    primosTexto += i + ' ';
    }
  }
  primosDiv.innerText = primosTexto.trim();
}
listarPrimos();