/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function validarFormularioRubrica(){
    nombre = document.getElementById("nombres").value;
    descripcion = document.getElementById("descripcion").value;
    cantidad_aspectos = document.getElementById("cantidad_aspectos").value;
    cantidad_sub_aspectos = document.getElementById("cantidad_sub_aspectos").value;
    cantidad_desemp = document.getElementById("cantidad_desemp").value;
    document.getElementById("nombres").style.borderColor = "#FFFFFF";
    document.getElementById("descripcion").style.borderColor = "#FFFFFF";
    document.getElementById("cantidad_aspectos").style.borderColor = "#FFFFFF";
    document.getElementById("cantidad_sub_aspectos").style.borderColor = "#FFFFFF";
    document.getElementById("cantidad_desemp").style.borderColor = "#FFFFFF";
    
    if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
        document.getElementById("nombres").style.borderColor = "#F52C01";
        return false;
    }else if(descripcion == null || descripcion.length == 0 || /^\s+$/.test(descripcion)){
        document.getElementById("descripcion").style.borderColor = "#F52C01";
        return false;
    }else if(cantidad_aspectos == null || cantidad_aspectos.length == 0 || /^\s+$/.test(cantidad_aspectos) || isNaN(cantidad_aspectos) || cantidad_aspectos<=0){
        document.getElementById("cantidad_aspectos").style.borderColor = "#F52C01";
        if (cantidad_aspectos<=0){
            
            setTimeout(function() { alert("el valor de numero de aspectos no puede ser cero ni negativo"); }, 1);
        }
        
        return false;
    }else if (cantidad_sub_aspectos == null || cantidad_sub_aspectos.length == 0 || /^\s+$/.test(cantidad_sub_aspectos) || isNaN(cantidad_sub_aspectos)){
        document.getElementById("cantidad_sub_aspectos").style.borderColor = "#F52C01";
        return false;
    }else if(cantidad_desemp == null || cantidad_desemp.length == 0 || /^\s+$/.test(cantidad_desemp) || isNaN(cantidad_desemp) || cantidad_desemp<=0){
        document.getElementById("cantidad_sub_aspectos").style.borderColor = "#F52C01";
        if (cantidad_desemp<=0){
            setTimeout(function() { alert("el valor de cantidad de desempeño no puede ser cero ni negativo"); }, 1);
            
        }
        return false;
    }else{
        return true;
    }
    
}
