<%-- 
    Document   : dashboard
    Created on : 25-nov-2019, 20:22:35
    Author     : LUIS-PEREZ
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page session="true" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1.0, miximum-scale=3.0, minimum-scale=1.0">
	<link rel="stylesheet" href="../css/estilosDashboard.css">
	<title>DashBoard</title>
	<script src="https://kit.fontawesome.com/a076d05399.js"></script>
</head>
<body>
        <%
            HttpSession misesion = request.getSession();
        %>
        <h1></h1>
	<div class="sidebar">
		<h2>Menu</h2>
		<ul>
			<li><a href=""><i class="fas fa-home icon"></i>Inicio</a></li>
			<li><a href=""><i class="far fa-edit icon"></i>Nueva Rubrica</a></li>
			<li><a href=""><i class="fas fa-filter icon"></i>Buscar</a></li>
			<li><a href=""><i class="fas fa-pen icon"></i>Actualizar</a></li>
			<li><a href=""><i class="fas fa-tasks icon"></i>Ver Todas</a></li>
			<li><a href=""><i class="fas fa-door-open icon"></i>Cerrar Sesion</a></li>
		</ul>
                <h3>Login: <%= misesion.getAttribute("usuario") %></h3>
	</div>
	<div class="contenedorPrincipal">
		<h1>Esta cologedo como #nombre</h1>
		<div class="mensaje">
			<p>Empieza a creando tu rubrica en Nueva Rubrica</p>
			<p>Empieza creando tu rubrica en Nueva Rubrica</p>
		</div>
	</div>
</body>
</html>
