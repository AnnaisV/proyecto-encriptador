const textArea = document.querySelector(".caja-mensaje");
const textMensaje = document.querySelector(".caja-resultado");


function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    textMensaje.value = textoEncriptado
    textArea.value = "";
    textMensaje.style.backgroundImage = "none";

}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada =  stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++ ) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }  
    }
    return stringEncriptada
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    textMensaje.value = textoEncriptado
    textArea.value = "";
    textMensaje.style.backgroundImage = "none";


}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++ ) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
 
        }
       
    }
    return stringDesencriptada
}

function copiarTexto() {

    var mensajeEncriptado = textMensaje.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    alert("Texto copiado al portapapeles")
    
    }


   