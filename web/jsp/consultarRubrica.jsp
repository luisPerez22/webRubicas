<%-- 
    Document   : consultarRubrica
    Created on : 25-nov-2019, 18:26:17
    Author     : LUIS-PEREZ
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page session="true" %>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1.0, miximum-scale=3.0, minimum-scale=1.0">
        <link href="../css/estilosDashboard.css" rel="stylesheet" type="text/css"/>
        <link href="../css/estilosLoginSignUp.css" rel="stylesheet" type="text/css"/>
        <title>Consultar Rubrica</title>
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
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
                <li><a href="dashboard.jsp"><i class="fas fa-home icon"></i>Inicio</a></li>
                <li><a href="nuevaRubrica.jsp"><i class="far fa-edit icon"></i>Nueva Rubrica</a></li>
                <li><a href="consultarRubrica.jsp"><i class="fas fa-filter icon"></i>Buscar</a></li>
                <li><a href=""><i class="fas fa-pen icon"></i>Actualizar</a></li>
                <li><a href=""><i class="fas fa-tasks icon"></i>Ver Todas</a></li>
                <li><a href="cerrarSesion.jsp"><i class="fas fa-door-open icon"></i>Cerrar Sesion</a></li>
            </ul>
            <h3>Login: <%= misesion.getAttribute("usuario") %></h3>
        </div>
        <div class="contenedor">
            <form class="formulario" action="">
                <h1>Consultar Rubrica</h1>
                    <div class="input-contenedor">
                        <i class="fas fa-filter icon"></i>
                        <input type="text" placeholder="Nombre o ID de la rubrica">
                    </div>
                    <input type="submit" value="Buscar" class="button">
                    <p>Puede buscar una rubrica por ID o por nombre de la misma</p>
                 
                </div>
            </form>
        </div>
    </body>
</html>
