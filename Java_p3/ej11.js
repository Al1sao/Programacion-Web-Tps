
function enviarMensaje(e){
   e.preventDefault()    // no recargar la pagina
   let user = document. getElementById("usuario"). value
   let msg  = document .getElementById("mensaje") .value
   let chat = document. getElementById("chat")

   chat.innerHTML += "<p><b>" + user + ":</b> " + msg + "</p>"

   let area = document.getElementById("mensaje")
   area.value = ""
   area.focus( )

}
