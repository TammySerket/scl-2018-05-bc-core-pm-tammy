window.cipher = {

  encode: (mensaje, offset) => {
  let answer1 = ""; //variable para el mensaje guardado
   for (let i = 0; i < mensaje.length; i++) { //busca codigo ASCII y guarda la letra en msjacifrar
    const cifrar = (mensaje.charCodeAt(i)- 65 + offset) % 26 + 65;
    answer1 = String.fromCharCode(cifrar);
  }
  const btnEncode = document.getElementById("btn1");
    btnEncode.addEventListener("click", ()=>{      
      document.getElementById("result").value = answer1;
    })
   
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
    


  