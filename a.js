
const encriptado = document.getElementById("c")


function btnEncriptar(){
    // document.getElementById("c").value = document.getElementById("d").value
    
    document.getElementById("c").value = encritar(document.getElementById("d").value)
}

function btnDesencriptar(){
    document.getElementById("c").value = desencritar(document.getElementById("d").value)
}


function disparar() {
    document.getElementById("a").style.display="none";
    document.getElementById("b").style.display="block";
    btnEncriptar()

}

function disparar1  () {
    document.getElementById("a").style.display="none";
    document.getElementById("b").style.display="block";
    btnDesencriptar()

}


function encritar(texto){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    texto = texto.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++){
        if(texto.includes(matrizCodigo[i][0])){
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return texto  

}

function desencritar(texto){
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]]
    texto = texto.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++){
        if(texto.includes(matrizCodigo[i][0])){
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return texto  

}

// funcion para resgrigir 

