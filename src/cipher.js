window.cipher = {

  encode: (mensaje, llave) => {
    let answer1 = ""; //variable para el mensaje guardado al hacer click
    let offset = parseInt(llave); //se crea variable local de llave con parseint 
    for (let i = 0; i <= mensaje.length; i++) { //busca codigo ASCII y guarda la letra en msjacifrar
      let msjacifrar = (mensaje.toUpperCase().charCodeAt(i) - 65 + offset) % 26 + 65;// se crea variable de mensaje para almacenar en numeros
      let msjcifrado = String.fromCharCode(msjacifrar);// se crea variable que pasa el cifrado de numeros a string

      answer1 += msjcifrado;//se concatena variable vacia con string cifrado
    }
    return answer1;//regresa mensaje cifrado
  },



  decode: (mensaje2, llave) => {
    let answer1 = "";//variable para el mensaje guardado al hacer click
    let offset = parseInt(llave);//se crea variable local de llave con parseint 
    for (let i = 0; i <= mensaje2.length; i++) { //busca codigo ASCII y guarda la letra en msjacifrar
      let msjacifrar = (mensaje2.toUpperCase().charCodeAt(i) - 65 - offset) % 26 + 65;// se crea variable de mensaje para almacenar en numeros
      let msjcifrado = String.fromCharCode(msjacifrar);// se crea variable que pasa el cifrado de numeros a string

      answer1 += msjcifrado;//se concatena variable vacia con string cifrado
    }
    return answer1;//regresa mensaje descifrado
  }
}



