window.cipher = {

    encode: () => {
     for (let i = 0; i < mensaje.length; ++i) { //busca codigo ASCII y guarda la letra en textoacifrar1
    let mensaje = (mensaje.toUpperCase().charCodeAt(i) - 65 + offset) % 26 + 65;
    let offset = String.fromCharCode(ciphator); /* Acá va tu código */
    }
    decode: () => {
        for (let i = 0; i < textoDescifrado.length; i++) { //busca codigo ASCII y guarda la letra en textoacifrar1
            let ciphator = (mensaje.toUpperCase().charCodeAt(i) + 65 - offset) % 26 + 65;
            let offset = String.fromCharCode(ciphator); /* Acá va tu código */
    }
