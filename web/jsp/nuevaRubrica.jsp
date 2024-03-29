<%-- 
    Document   : nuevaRubrica
    Created on : 26-nov-2019, 23:15:31
    Author     : LUIS-PEREZ
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page session="true" %>
<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>Formulario rubricas alternativa</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="../css/estilosTablaRubrica.css" rel="stylesheet" type="text/css"/>
        <link href="../css/estilosDashboard.css" rel="stylesheet" type="text/css"/>
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
        <script src="../js/scriptFormularioDinamico.js" type="text/javascript"></script>
    </head>
    <body>
        <%
            HttpSession misesion = request.getSession();
            String nombre = (String)misesion.getAttribute("usuario");
            if (nombre == null) {
                response.sendRedirect("iniciarSesion.jsp");
            }
        %>
        <div class="sidebar">
		<h2>Menu</h2>
		<ul>
			<li><a href=""><i class="fas fa-home icon"></i>Inicio</a></li>
			<li><a href="nuevaRubrica.jsp"><i class="far fa-edit icon"></i>Nueva Rubrica</a></li>
			<li><a href="consultarRubrica.jsp"><i class="fas fa-filter icon"></i>Buscar</a></li>
			<li><a href=""><i class="fas fa-pen icon"></i>Actualizar</a></li>
			<li><a href=""><i class="fas fa-tasks icon"></i>Ver Todas</a></li>
			<li><a href="cerrarSesion.jsp"><i class="fas fa-door-open icon"></i>Cerrar Sesion</a></li>
		</ul>
                <h3>Login: <%= misesion.getAttribute("usuario") %></h3>
	</div>
        <div class="main">
            <h2 class="titulo" >Formulario Rubica</h2>
            <form  class="formulario" action="../jsp/newjsp.jsp" method="post" >

                <div  class="div-nombre">
                    <label class="label-input" for="nombres">Nombre Rubica</label>
                    <input class="casilla-input" type="text" name="nombres" id="nombres" >
                </div>
                <div class="div-descrip">
                    <label class="label-input" for="descripcion">Descripcion</label>
                    <textarea class="casilla-text-area" name="descripcion" id="descripcion"   ></textarea>
                </div>

               


                <table class="table-principal-resitro" border="1" style="width: 100%; border-collapse: collapse" id="tabla1">
                    <tbody id="tabla-formulario">
                        <tr>

                            <th>
                                Aspectos
                            </th>
                            <th>
                                SubAspectos
                            </th>
                            <th style="width: 60px" >
                                <input class="casilla-desempe" style="width: 60px; padding: 0;margin: 0"  type="text" name="desempeno-1"  >
                            </th>
                            <th style="width: 60px" >
                                <input class="casilla-desempe" style="width: 60px; padding: 0;margin: 0"  type="text" name="desempeno-1"  >
                            </th>
                            <th style="width: 60px" >
                                <input class="casilla-desempe" style="width: 60px; padding: 0;margin: 0"  type="text" name="desempeno-1"  >
                            </th>
                            <th style="width: 60px" >
                                <input class="casilla-desempe" style="width: 60px; padding: 0;margin: 0"  type="text" name="desempeno-1"  >
                            </th>
                            <th style="width: 60px" >
                                <input class="casilla-desempe" style="width: 60px; padding: 0;margin: 0"  type="text" name="desempeno-1"  >
                            </th>
                        </tr>
                        <tr>
                            <td ><input class="aspecto" type="text" name="aspecto-1"  ></td>
                            <td id="aspec-1" style="position:relative">

                                <table class="table-sub-aspec" border="1S" style="width: 100%; height: 100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input  class="sub-aspect" type="text"  name="sub-aspec1-1"  >

                                            </td>

                                        </tr>


                                    </tbody>

                                </table>
                                <button class="boton-agregar-subaspecto" type="button"  style="display: flex; position: absolute; top:0; right: 0" onclick="agregarSub(this)">+</button>
                                <button class="boton-quitar-subaspecto" type="button"  style="display: flex; position: absolute; bottom: 0; right: 0" onclick="eliminarSubAspecto(this)"> -</button>

                            </td>
                            <td style="padding: 0" >
                                <table class="table-desempe" border="1S" id="table-aspec-1" style="width: 100%; height: 100%">
                                    <tbody >
                                        <tr >
                                            <td  class="check-desempe" id="desempeIni">

                                                
                                            </td>

                                        </tr>


                                    </tbody>

                                </table>


                            </td>

                        </tr>

                    <tbody>



                </table>
                
                <div class="footerBotones">
                    <div class="botones-aspecto">
                        <button  class="boton-agregar-aspecto" type="button" onclick="agregarAspecto()" >Agregar Aspecto</button>
                        <button class="boton-quitar-aspecto" type="button" onclick="eliminarAspecto()" >Quitar Aspecto</button>

                    </div>


                    <div class="botones-desempe">
                        <button class="boton-agregar-desempe" type="button" onclick="agregarDesempe()" >Agregar desempeño</button>
                        <button class="boton-quitar-desempe" type="button" onclick="eliminarDesenpe()" >Quitar desempeño</button>

                    </div>

                </div>

                <div class="botonera">
                    <input class="boton-registrar" type="submit" value=" Registrar Rubica ">
                    <input class="boton-limpiar" type="reset" value="Limpiar">
                </div>
            </form>
        </div>
    </body>
</html>

