function facts(n){
  if(n === 0){
    return 1
  } else {
    return n * facts(n-1)
  }
}
function calcular(){
  let num = parseInt(document.getElementById("numero").value)
  let res = facts(num)
  document.getElementById("resultado").innerText = 
    "El facto de " + num + " es " + res
}