let ahora = new Date( )    

document.getElementById("fecha").innerHTML = 
   "Hoy es: "+ahora.toLocaleString()  

let navidad = new Date(ahora.getFullYear(), 11, 25)   // 11 = diciembre

if(ahora > navidad){
   navidad.setFullYear( navidad.getFullYear()+1 )    // si ya paso, calculo la del año que viene
}
let diff = navidad - ahora
let dias = Math.floor(diff / (1000*60*60*24))
let horas = Math.floor((diff / (1000*60*60)) % 24)
let mins = Math.floor((diff / (1000*60)) % 60)
let segs = Math.floor((diff / 1000) % 60)
document.getElementById("navidad").innerHTML = 
 "Faltan " + dias + " dias, " + horas + " horas, " + mins + " minutos y " + segs + " segundos para Navidad."
function calcularEdad( ) {
   let anio = document.getElementById("anio").value
   let edad = ahora.getFullYear() - anio
   document.getElementById("edad").innerHTML = "Su edad es " + edad
}