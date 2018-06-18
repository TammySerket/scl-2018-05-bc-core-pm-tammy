window.cipher = {

  encode: (mensaje, offset) => {
  // cifrado = mensaje.toLowerCase;

   for (let i = 0; i < mensaje.length; i++) { //busca codigo ASCII y guarda la letra en msjacifrar
   const cifrado = (mensaje.charCodeAt(i)- 65 + offset) % 26 + 65;
   result + String.fromCharCode(cifrado);
   }
   },
   
   

decode: (mensaje2, offset) => {
  mensaje2 = document.getElementById("msjcifrado").innerHTML;
  for (let i = 0; i < mensaje2.length; i++) { //busca codigo ASCII y guarda la letra en textodescifrado
    let mensaje2 = (mensaje2.toLowerCase().charCodeAt(i) + 65 - offset) % 26 + 65;
    offset = (document.getElementById("key".parseIn()).value); /* Acá va tu código */
    //let mensaje2 = () => {
     // 
 // }
  }}}
    


  