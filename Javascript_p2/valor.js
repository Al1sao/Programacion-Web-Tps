function valorSeleccionado(valor) {
    if (valor < 0) {
     return -1;
    } 
    else if (valor < 10) {
        return 0;
    } 
    else if (valor < 50) {
      return 1;
    } 
    else if (valor < 100) {
  return 2;
    } 
    else {
  return 3;
    }
}

function Valprob() {
    let num = prompt("Ingrese un número:");
    let res = valorSeleccionado(parseFloat(num));
    document.getElementById("resultado").innerText = "Resultado: " + res;
}