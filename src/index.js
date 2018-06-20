function encode() {
    const mensaje = document.getElementById("msjacifrar").value;//se crea constante con valor de mensaje
    const llave = document.getElementById("key").value;// se crea constante con valor de llave    
    const answer = window.cipher.encode(mensaje,llave);// se crea constante answer que llama a mensaje y llave de cipher.js   
    document.getElementById("result").innerHTML = answer;//se llama a result para que tenga el valor de answer y de el resultado
    }


function decode() {
    const mensaje2 = document.getElementById("msjcifrado").value;//se crea constante con valor de mensaje
    const llave = parseInt(document.getElementById("key").value);// se crea constante con valor de llave
    const answer = window.cipher.decode(mensaje2,llave);// se crea constante answer que llama a mensaje y llave de cipher.js 
    document.getElementById("result").innerHTML = answer;//se llama a result para que tenga el valor de answer y de el resultado
}

