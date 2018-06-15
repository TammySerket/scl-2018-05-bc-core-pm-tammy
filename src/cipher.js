/*window.cipher =  ({ /* Acá va tu código (la flecha reemplaza a function)*/
/*  encode: (mensaje, offset ) => {//dando nombre a la funcion
  let mensaje = "";
 let offset = 0;
mensaje = document.getElementById("cipher.encode()").value;
offset = parseInt(document.getElementById('key').value);
  for (let i = 0; i < mensaje.length; ++i) { //busca codigo ASCII y guarda la letra en textoacifrar1
    let mensaje = (mensaje.toUpperCase().charCodeAt(i) - 65 + offset) % 26 + 65;
    let offset = String.fromCharCode(ciphator);
    //textoCifrar+=cipher;
  }
 //document.getElementById("cajaResultado").innerHTML = textoCifrar
  },

  decode: (mensaje, offset) => {
  /* Acá va tu código */
/*  mensaje = document.getElementById("msjcifrado").value;
  offset = parseInt(document.getElementById('key').value);
  for (let i = 0; i < textoDescifrado.length; i++) { //busca codigo ASCII y guarda la letra en textoacifrar1
    let ciphator = (mensaje.toUpperCase().charCodeAt(i) + 65 - offset) % 26 + 65;
    let offset = String.fromCharCode(ciphator);
    textoDescifrado+=cipher;
  }
  document.getElementById("cajaResultado").innerHTML = textoDescifrado
  }*/
//}); *//
window.cipher = {

  encode: (mensaje, offset) => {
   for (let i = 0; i < mensaje.length; ++i) { //busca codigo ASCII y guarda la letra en textoacifrar
  let mensaje = (mensaje.toUpperCase().charCodeAt(i) - 65 + offset) % 26 + 65;
  offset = (document.getElementById("key".parseIn()).value); /* Acá va tu código */
  }},

decode: (mensaje2, offset) => {
  for (let i = 0; i < mensaje2.length; i++) { //busca codigo ASCII y guarda la letra en textodescifrado
    let mensaje2 = (mensaje2.toUpperCase().charCodeAt(i) + 65 - offset) % 26 + 65;
    offset = (document.getElementById("key".parseIn()).value); /* Acá va tu código */
  }}}
