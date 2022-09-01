var entrada=document.querySelector(".ingreso");
var salida=document.querySelector(".mostrarTexto");

var limpiarLetras=document.querySelector(".informacion");


function btEncriptar(){
    if(entrada.value!= " "){
        var textoEn=encriptar(entrada.value);
        salida.value=textoEn;
        salida.style.backgroundImage="none";
        
        limpiarLetras.style.visibility = "hidden"; 
     } 
     else{
     salida.value=" ";

   salida.style.backgroundImage="none";
        limpiarLetras.style.visibility = "visible";
    
     }
     entrada.value=" ";
} 

function btDesEncriptar(){
    if(entrada.value!= " "){
    var textoDes=desEncriptar(entrada.value)
    salida.value=textoDes;
    salida.style.backgroundImage="none";
        
    limpiarLetras.style.visibility = "hidden"; 
    entrada.value=" ";
    }
    else{
        salida.value=" ";
   
       salida.style.backgroundImage="none";
           limpiarLetras.style.visibility = "visible";
       
        }
}

function btCopiar(){
    navigator.clipboard.writeText(salida.value);
    /* para subrayar*/
    salida.select();
}

function encriptar(textoEncriptar){
    
    let matrizEncriptar =[["e","enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
     textoEncriptar= textoEncriptar.toLowerCase();
     for(let i=0; i<matrizEncriptar.length; i++){
        if(textoEncriptar.includes(matrizEncriptar[i][0])){
            textoEncriptar=textoEncriptar.replaceAll(matrizEncriptar[i][0], matrizEncriptar[i][1]);
        }
     }
     return textoEncriptar;
}


function desEncriptar(textoDesEncriptar){
    let matrizEncriptar =[["e","enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoDesEncriptar= textoDesEncriptar.toLowerCase();
    for(let i=0; i<matrizEncriptar.length; i++){
       if(textoDesEncriptar.includes(matrizEncriptar[i][1])){
           textoDesEncriptar=textoDesEncriptar.replaceAll(matrizEncriptar[i][1], matrizEncriptar[i][0]);
       }
    }
    return textoDesEncriptar;
}