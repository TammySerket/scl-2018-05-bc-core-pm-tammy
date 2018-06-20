function encode() {
    const mensaje = document.getElementById("msjacifrar").value;
    const llave = document.getElementById("key").value;    
    const answer = window.cipher.encode(mensaje,llave);   
    document.getElementById("result").innerHTML = answer;
    }


function decode() {
    const mensaje2 = document.getElementById("msjcifrado").value;
    const llave = parseInt(document.getElementById("key").value);
    const answer = window.cipher.decode(mensaje2,llave);
    document.getElementById("result").innerHTML = answer;
  /*  const btnDecode = document.getElementById("btn2");
    btnDecode.addEventListener("click", ()=>{      
    })*/
}

