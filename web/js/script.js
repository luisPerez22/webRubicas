/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//function validarFormularioRubrica(){
//    nombre = document.getElementById("nombres").value;
//    descripcion = document.getElementById("descripcion").value;
//    cantidad_aspectos = document.getElementById("cantidad_aspectos").value;
//    cantidad_sub_aspectos = document.getElementById("cantidad_sub_aspectos").value;
//    cantidad_desemp = document.getElementById("cantidad_desemp").value;
//    document.getElementById("nombres").style.borderColor = "#FFFFFF";
//    document.getElementById("descripcion").style.borderColor = "#FFFFFF";
//    document.getElementById("cantidad_aspectos").style.borderColor = "#FFFFFF";
//    document.getElementById("cantidad_sub_aspectos").style.borderColor = "#FFFFFF";
//    document.getElementById("cantidad_desemp").style.borderColor = "#FFFFFF";
//    
//    if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
//        document.getElementById("nombres").style.borderColor = "#F52C01";
//        return false;
//    }else if(descripcion == null || descripcion.length == 0 || /^\s+$/.test(descripcion)){
//        document.getElementById("descripcion").style.borderColor = "#F52C01";
//        return false;
//    }else if(cantidad_aspectos == null || cantidad_aspectos.length == 0 || /^\s+$/.test(cantidad_aspectos) || isNaN(cantidad_aspectos) || cantidad_aspectos<=0){
//        document.getElementById("cantidad_aspectos").style.borderColor = "#F52C01";
//        if (cantidad_aspectos<=0){
//            
//            setTimeout(function() { alert("el valor de numero de aspectos no puede ser cero ni negativo"); }, 1);
//        }
//        
//        return false;
//    }else if (cantidad_sub_aspectos == null || cantidad_sub_aspectos.length == 0 || /^\s+$/.test(cantidad_sub_aspectos) || isNaN(cantidad_sub_aspectos)){
//        document.getElementById("cantidad_sub_aspectos").style.borderColor = "#F52C01";
//        return false;
//    }else if(cantidad_desemp == null || cantidad_desemp.length == 0 || /^\s+$/.test(cantidad_desemp) || isNaN(cantidad_desemp) || cantidad_desemp<=0){
//        document.getElementById("cantidad_sub_aspectos").style.borderColor = "#F52C01";
//        if (cantidad_desemp<=0){
//            setTimeout(function() { alert("el valor de cantidad de desempeño no puede ser cero ni negativo"); }, 1);
//            
//        }
//        return false;
//    }else{
//        return true;
//    }
//    
//}



function agregarSubAspectos(){
    
    var catidadAspectos =document.getElementById("cantidad_aspectos").value;
    var elementos= document.getElementById("sub-aspectos");
    elementos.innerHTML='';
    for (var i = 1;i <= catidadAspectos; i++) {
        console.log("oye")
        elementos.innerHTML +='<label class="label-input"  >Numero sub aspectos del Aspecto '+ i+'</label>';
        elementos.innerHTML += '<input class="casilla-input" type="number" name="cantidad_sub_aspectos[]" id="cantidad_sub_aspectos" >';
        
    }
    
}


function agregarSub(value){
    var boton = value.outerHTML;
    var padre= value.parentElement;
    var campo=document.createElement("INPUT");
    var numeroSub=padre.getElementsByTagName("input").length
    campo.type= "text";
    campo.name= "sub-aspec"+padre.id.split("-")[1]+"-"+(numeroSub+1) ;
    padre.insertBefore(campo,value);
    
}

function agregarAspecto(){
    var cantidadAsp=document.getElementById("tabla-formulario").getElementsByTagName("TR").length;
    var campo = document.createElement("TR");
    
    var htmltexto='<td ><input class="" type="text" name="aspecto'+cantidadAsp + '"  ></td>';
    htmltexto += '<td id="aspec-'+cantidadAsp+'">';
    htmltexto+='<input class="" type="text"  name="sub-aspec'+cantidadAsp+'-1"  >';
    htmltexto+='<button type="button" onclick="agregarSub(this)">Agregar Subaspecto</button>';
    htmltexto+='</td>';
    campo.innerHTML=htmltexto;
    document.getElementById("tabla-formulario").appendChild(campo);
    
}


function appendColumn() {
    var listaRows = document.getElementById('tabla-formulario').getElementsByTagName("TR");
        
    
    for (var i =0;i<listaRows.length;i++){
        listaRows[i].appendChild(document.createElement("TD"))
        
    }
    
}
