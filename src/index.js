function encode(){
    let mensaje = document.getElementById("msjacifrar").value;
    let offset = parseInt(document.getElementById("key").value);
    const resultado = window.cipher.encode(mensaje, offset);
    document.getElementById("cajaResultado").innerHTML = resultado;
}

function decode(){
    let mensaje = document.getElementById("msjcifrado").value;
    let offset = parseInt(document.getElementById("key").value);
    const resultado = window.cipher.decode(mensaje, offset);
    document.getElementById("cajaResultado").innerHTML = resultado;
}
