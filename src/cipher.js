window.cipher =  { /* Acá va tu código (la flecha reemplaza a function)*/
  encode: (mensaje, offset ) => {//dando nombre a la funcion
   mensaje = document.getElementById("msjacifrar").value;
   offset = parseInt(document.getElementById('key').value);
  let textoCifrar = "";
  for (let i = 0; i < textoCifrar.length; i++) { //busca codigo ASCII y guarda la letra en textoacifrar1
    const cipher = (mensaje.toUpperCase().charCodeAt(i) - 65 + offset) % 26 + 65;
    const offset = String.fromCharCode(cipher);
    textoCifrar+=cipher;
  }
 document.getElementById("cajaResultado").innerHTML = textoCifrar
  }

  decode: (mensaje, offset) => {
  /* Acá va tu código */
  mensaje = document.getElementById("msjcifrado").value;
  offset = parseInt(document.getElementById('key').value);
  let textoDescifrado = "";
  for (let i = 0; i < textoDescifrado.length; i++) { //busca codigo ASCII y guarda la letra en textoacifrar1
    const cipher = (mensaje.toUpperCase().charCodeAt(i) + 65 - offset) % 26 + 65;
    const offset = String.fromCharCode(cipher);
    textoDescifrado+=cipher;
  }
  document.getElementById("cajaResultado").innerHTML = textoDescifrado
}
}

