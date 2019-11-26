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

function validarRegistro(){
    
    var expresion;
    
    nombres=document.getElementById("nombres").value;
    apellidos=document.getElementById("apellidos").value;
    areaconocimiento=document.getElementById("areaconocimiento").value;
    correo=document.getElementById("correo").value;
    usuario=document.getElementById("usuario").value;
    clave=document.getElementById("clave").value;
    
    
    expresion = /\w+@+\w+\.+[a-z]/;
    
    
    if(nombres.length==0 || apellidos.length==0 || areaconocimiento.length==0 || correo.length==0 || usuario.length==0 || clave.length==0){
        alert("Por favor llenar todos los campos");
        return false;
    }else if(nombres.length>50){
        alert("Los nombres son muy largos");
        return false;
    }else if(apellidos.length>50){
        alert("Los apellidos son muy largos");
        return false;
    }else if(areaconocimiento.length>50){
        alert("El areaconocimiento es muy largo");
        return false;
    }else if(!expresion.test(correo)){
        alert("El formato del correo no es valido");
        
    }else if(correo.length>50){
        alert("El correo es muy largo");
        return false;
    }else if(usuario.length>50){
        alert("El usuario es muy largo");
        return false;
    }else if(clave.length>50){
        alert("La clave es muy larga");
        return false;
    }
    
    
    

}