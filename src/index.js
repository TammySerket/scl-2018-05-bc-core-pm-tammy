function encode(mensaje, offset){
    document.getElementById("msjacifrar").value, document.getElementById("key".parseInt().value);
    var resultado = document.getElementById(cipher.encode()).value;
    document.getElementById("cajaResultado").value = resultado;
    //let mensaje = document.getElementById("btn1").value;
    //let offset = parseInt(document.getElementById("key").value);
    //const resultado = encode(mensaje, offset);
    //document.getElementById("cajaResultado").innerHTML = resultado;
}

function decode(){
    let mensaje = document.getElementById("btn2").value;
    let offset = parseInt(document.getElementById("key").value);
    const resultado = decode(mensaje, offset);
    document.getElementById("cajaResultado").innerHTML = resultado;
}
