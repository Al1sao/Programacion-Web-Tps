const dolar = 1000;
const real  = 180;
const euro  = 1100;
function conv(tipo) {
  let cant = parseFloat(document.getElementById("cantidad").value);
  let res = "";

  if (tipo==="pesos-dolares")res = cant+"ARS="+(cant / dolar).toFixed(2)+"USD";

  if (tipo==="dolares-pesos")res = cant+"USD="+(cant * dolar).toFixed(2)+"ARS";

  if (tipo==="pesos-reales")res = cant+"ARS="+(cant / real).toFixed(2)+"BRL";

  if (tipo==="reales-pesos")res = cant+"BRL="+(cant * real).toFixed(2)+"ARS";

  if (tipo==="pesos-euros")res = cant+"ARS="+(cant / euro).toFixed(2)+"EUR";

  if (tipo==="euros-pesos")res = cant+"EUR="+(cant * euro).toFixed(2)+"ARS";

  document.getElementById("resultado").innerText = res;
}