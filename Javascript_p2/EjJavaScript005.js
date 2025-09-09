function suma(num1, num2) {
 return parseInt(num1)+parseInt(num2);}
function restar(num1, num2) {
  return parseInt(num1)-parseInt(num2);
}
function multiplicar(num1, num2) {
   return parseInt(num1)*parseInt(num2);
}
function dividir(num1, num2) {
     return parseInt(num1)/parseInt(num2);
}
function calcular(operacion) {
    let n1 = prompt("Ingrese un número:");
 let n2 = prompt("Ingrese otro número:");
    let resultado;

    if (operacion === 'suma') {
  resultado = suma(n1, n2);
    } else if (operacion === 'resta') {
      resultado = restar(n1, n2);
    } else if (operacion === 'multiplicar') {
    resultado = multiplicar(n1, n2);
    } else if (operacion === 'dividir') {
 resultado = dividir(n1, n2);
    }

    document.getElementById("resultado").value = resultado;
}