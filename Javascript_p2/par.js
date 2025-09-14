function mostrarPares(){
  let div = document.getElementById("numeros")
  let texto = ""
  
  for(let i=0;i<500;i++){
    if(i%2==0){
      texto += i + " "
    }
  }
  div.innerHTML = texto

}
window.onload = mostrarPares