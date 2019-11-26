/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




document.addEventListener('DOMContentLoaded', function () {
    // your code goes here
    document.getElementById("desempeIni").height = document.getElementById("tabla1").rows[1].cells[1].clientHeight
    
      actualizarDesepe()
    
}, false);





function agregarSub(value) {
    console.log(value);
    var boton = value.outerHTML;
    var padre = value.previousElementSibling;
    var padre2 = value.parentElement;
    var row = padre.insertRow(-1)
    var cell = row.insertCell(-1)



    var campo = document.createElement("INPUT");
    var numeroSub = padre.getElementsByTagName("tr").length
    campo.type = "text";
    campo.name = "sub-aspec" + padre2.id.split("-")[1] + "-" + (numeroSub);
    campo.setAttribute("class", "sub-aspect")
    cell.appendChild(campo);

    console.log(padre2.nextElementSibling)

    var columna2 = document.getElementById("table-aspec-" + padre2.id.split("-")[1])
    var row2 = columna2.insertRow(-1);
    var cell2 = row2.insertCell(-1)
    cell2.setAttribute("class", "check-desempe")
    cell2.parentElement.previousElementSibling.getElementsByTagName("td")[0].height = cell.clientHeight-2 
    cell2.innerHTML = "&nbsp";
    cell2.height = cell.clientHeight + 2

    actualizarDesepe()

}

function agregarAspecto() {


    var tabla = document.getElementById("tabla1");
    var cantidadAsp = tabla.rows.length;
    var row = tabla.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);


    cell1.innerHTML = '<input class="aspecto" type="text" name="aspecto-' + cantidadAsp + '"  >'
    cell2.id = 'aspec-' + cantidadAsp
    cell2.style = "position:relative";

    var htmltexto = '<table class="table-sub-aspec" border="1S" style="width: 100%; height: 100%">';
    htmltexto += '<tbody><tr><td>'
    htmltexto += '<input class="sub-aspect" type="text"  name="sub-aspec' + cantidadAsp + '-1"  >';
    htmltexto += '</td></tr></tbody></table>'
    htmltexto += '<button class="boton-agregar-subaspecto" type="button" style="display: flex; position: absolute; top:0; right: 0" onclick="agregarSub(this)">+</button>';
    htmltexto += '<button class="boton-quitar-subaspecto" type="button"  style="display: flex; position: absolute; bottom: 0; right: 0" onclick="eliminarSubAspecto(this)"> -</button>'

    cell2.innerHTML = htmltexto;

    var htmltexto2 = '<table class="table-desempe" border="1S" id="table-aspec-' + cantidadAsp + '" style="width: 100%; height: 100%">'
    htmltexto2 += '<tbody ><tr ><td class="check-desempe" style="height: ' + (document.getElementById("tabla1").rows[cantidadAsp].cells[1].clientHeight - 2) + 'px"></td></tr></tbody></table>'
    cell3.innerHTML = htmltexto2;


    actualizarDesepe();

}


function agregarDesempe() {


    var listaRows = document.getElementById('tabla1').rows;
    //console.log(listaRows[0].cells[listaRows[0].cells.length-1])
    listaRows[0].insertCell(-1).innerHTML = '<input class="casilla-desempe" style="width: 60px; padding: 0;margin: 0"  type="text" name="desempeno-' + (listaRows[0].cells.length - 2) + '"  >';
    listaRows[0].cells[listaRows[0].cells.length - 1].width = "60px"
    //console.log(listaRows[1].cells[2])

    for (var x = 1; x < listaRows.length; x++) {


        for (var i = 3; i < listaRows[0].cells.length; i++) {
            console.log(listaRows[0].cells.length + "-" + listaRows[x].cells.length)
            if (listaRows[0].cells.length != listaRows[x].cells.length) {
                var cell = listaRows[x].insertCell(i);
                cell.appendChild(listaRows[x].cells[2].firstElementChild.cloneNode(true))

            }


        }


        for (var z = 3; z < listaRows[0].cells.length; z++) {
            if (listaRows[0].cells.length == listaRows[x].cells.length) {
                var cell = listaRows[x].cells[z];
                cell.innerHTML = null
                cell.appendChild(listaRows[x].cells[2].firstElementChild.cloneNode(true))

            }

        }


    }


}


function actualizarDesepe() {
    var listaRows = document.getElementById('tabla1').rows;
    for (var x = 1; x < listaRows.length; x++) {


        for (var i = 3; i < listaRows[0].cells.length; i++) {
            if (listaRows[0].cells.length != listaRows[x].cells.length) {
                var cell = listaRows[x].insertCell(i);
                cell.appendChild(listaRows[x].cells[2].firstElementChild.cloneNode(true))

            }

        }

        for (var z = 3; z < listaRows[0].cells.length; z++) {
            if (listaRows[0].cells.length == listaRows[x].cells.length) {
                var cell = listaRows[x].cells[z];
                cell.innerHTML = null
                cell.appendChild(listaRows[x].cells[2].firstElementChild.cloneNode(true))

            }

        }


    }

}


function eliminarDesenpe() {
    var tabla = document.getElementById('tabla1');

    if (tabla.rows[0].cells.length > 3) {
        for (var i = 0; i < tabla.rows.length; i++) {
            tabla.rows[i].deleteCell(-1)
        }
    }



}


function eliminarAspecto() {
    var tabla = document.getElementById('tabla1');

    if (tabla.rows.length > 2) {
        tabla.deleteRow(-1)
    }


}

function eliminarSubAspecto(valor) {
    var tabla = valor.parentElement.firstElementChild;
    var tabla2 = valor.parentElement.nextElementSibling.firstElementChild;
    if (tabla.rows.length > 1) {
        tabla.deleteRow(-1)
        tabla2.deleteRow(-1)
        actualizarDesepe()
    }

}


