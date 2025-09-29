function procesar(){
    let txt = document.getElementById("mensaje").value
    let r = ""
    r = r + "<p>Mayus: " + txt.toUpperCase() + "</p>"
    r += "<p>Minus: " + txt.toLowerCase() + "</p>"
    r += "<p>Sub (5,10): " + txt.substr(5,10) + "</p>"
    
    if(txt.indexOf("hola") != -1){
 r += "<p>hola que tal</p>"
}
    let sinH = txt.replace("hola","")
    let sinEsp = sinH.split(" ").join("")
    r += "<p>Sin hola y espacios: " + sinEsp + "</p>"
    let trad = txt
    trad = trad.replace("my","mi")
    trad = trad.replace("hello","hola")
    trad = trad.replace("name","nombre")

    r += "<p>Trad: " + trad + "</p>"

    document.getElementById("resultado").innerHTML = r }