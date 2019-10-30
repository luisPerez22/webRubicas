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
    
    if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
        return false;
    }else if(descripcion == null || descripcion.length == 0 || /^\s+$/.test(descripcion)){
        return false;
    }else if(cantidad_aspectos == null || cantidad_aspectos.length == 0 || /^\s+$/.test(cantidad_aspectos) || isNaN(cantidad_aspectos)){
        return false;
    }else if (cantidad_sub_aspectos == null || cantidad_sub_aspectos.length == 0 || /^\s+$/.test(cantidad_sub_aspectos) || isNaN(cantidad_sub_aspectos)){
        return false;
    }else if(cantidad_desemp == null || cantidad_desemp.length == 0 || /^\s+$/.test(cantidad_desemp) || isNaN(cantidad_desemp)){
        return false;
    }else{
        return true;
    }
    
}