function mostrar(){
  let div = document.getElementById("valores")
  let texto = ""

  for(let x=0; x<100; x++){
    let fx = 3*x + 5 - (x*x)
    texto += fx + " "
  }
  div.innerHTML = texto
}
window.onload = mostrar