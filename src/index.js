function encode() {
    let mensaje = document.getElementById("msjacifrar").value;
    let offset = parseInt(document.getElementById("key").value);    
    const answer = window.cipher.encode(mensaje,offset);   
    document.getElementById("result").innerHTML = answer;
    
    }


function decode() {
    let mensaje2 = document.getElementById("msjcifrado").value;
    let offset = parseInt(document.getElementById("key").value);
    const answer = window.cipher.decode(mensaje2,offset);
    document.getElementById("result").innerHTML = answer;
    const btnDecode = document.getElementById("btn2");
    btnDecode.addEventListener("click", ()=>{      
    })
}

