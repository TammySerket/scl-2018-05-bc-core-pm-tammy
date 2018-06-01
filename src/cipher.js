window.cipher =  { /* Acá va tu código (la flecha reemplaza a function)*/
  encode: (abc, offset ) => {//dando nombre a la funcion
   abc = document.getElementById("msjacifrar").value;
  let textoacifrar1 = "";
  }
  
  for (let i = 0; i < textoacifrar1.length; i++) { //busca codigo ASCII y guarda la letra en textoacifrar1
    const formula = (abc.toUpperCase().charCodeAt(i)- 65 + offset)%26 + 65;
  }
decode: (abc, offset) => {
  /* Acá va tu código */
}

