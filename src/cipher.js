window.cipher =  { /* Acá va tu código (la flecha reemplaza a function)*/
  encode: (mensaje, offset ) => {//dando nombre a la funcion
   mensaje = document.getElementById("msjacifrar").value;
   offset = (document.getElementById('key'.parseIn()).value);
  for (let i = 0; i < textoCifrar.length; i++) { //busca codigo ASCII y guarda la letra en textoacifrar1
    let ciphator = (mensaje.toUpperCase().charCodeAt(i) - 65 + offset) % 26 + 65;
    let offset = String.fromCharCode(ciphator);
    textoCifrar+=cipher;
  }
 //document.getElementById("cajaResultado").innerHTML = textoCifrar
  },

  decode: (mensaje, offset) => {
  /* Acá va tu código */
  mensaje = document.getElementById("msjcifrado").value;
  offset = parseInt(document.getElementById('key').value);
  for (let i = 0; i < textoDescifrado.length; i++) { //busca codigo ASCII y guarda la letra en textoacifrar1
    let ciphator = (mensaje.toUpperCase().charCodeAt(i) + 65 - offset) % 26 + 65;
    let offset = String.fromCharCode(ciphator);
    textoDescifrado+=cipher;
  }
  document.getElementById("cajaResultado").innerHTML = textoDescifrado
}
}

