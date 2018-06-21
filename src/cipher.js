window.cipher = {

  encode: (mensaje, llave) => {
    let answer1 = ""; //variable para el mensaje guardado al hacer click
    let offset = parseInt(llave); //se crea variable local de llave con parseint 
    for (let i = 0; i < mensaje.length; i++) { //busca codigo ASCII y guarda la letra en msjacifrar
      let msjcifrado = mensaje.toLowerCase();
      codigo = msjcifrado.charCodeAt(i);
      
      if (codigo === 32){
        answer1 += " ";
      }
      if (codigo >= 97 && codigo <= 122){
       
      let msjacifrar = (codigo - 97   + offset) % 26 + 97;// se crea variable de mensaje para almacenar en numeros
      answer1 += String.fromCharCode(msjacifrar);// se crea variable que pasa el cifrado de numeros a string
    }
    
  }
    return answer1.toUpperCase();//regresa mensaje cifrado
  },



  decode: (mensaje2, llave) => {
    let answer2 = "";//variable para el mensaje guardado al hacer click
    let offset = parseInt(llave);//se crea variable local de llave con parseint 
    for (let i = 0; i < mensaje2.length; i++) { //busca codigo ASCII y guarda la letra en msjacifrar
      let msjcifrado = mensaje2.toLowerCase();
      codigo = msjcifrado.charCodeAt(i);
      if (codigo === 32){
        answer2 += " ";
      }
      
      if (codigo <= 122 && codigo >= 97){
       
      let msjacifrar = (codigo - offset - 122) % 26 + 122;// se crea variable de mensaje para almacenar en numeros
      answer2 += String.fromCharCode(msjacifrar);// se crea variable que pasa el cifrado de numeros a string
//se concatena variable vacia con string cifrado
    }
    
  }
  return answer2.toUpperCase();//regresa mensaje descifrado
}

}