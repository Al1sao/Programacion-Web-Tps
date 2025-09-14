function detect() {
    let resultado = navigator.userAgent;
    let mensaje = '';
    if (resultado.indexOf("MSIE") !== -1 || resultado.indexOf("Trident") !== -1) {
   mensaje = "Microsoft Internet Explorer";
  window.location.href = "http://www.microsoft.com/ie";
    } else if (resultado.indexOf("Firefox") !== -1) {
   mensaje = "Firefox";
  window.location.href = "http://www.mozilla.com/firefox/";
    } else if (resultado.indexOf("Konqueror") !== -1) {
  mensaje = "Konqueror";
  window.location.href = "http://konqueror.org";
    } else {
mensaje = "Browser desconocido qmal";
alert(mensaje);
    }
    console.log("Navegador detectado: " + mensaje);
}
window.onload = detect;