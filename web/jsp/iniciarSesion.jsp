<%-- 
    Document   : iniciarSesion.jsp
    Created on : 25-nov-2019, 19:50:44
    Author     : LUIS-PEREZ
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="edu.cecar.logica.Docente" %>
<%@page session="true" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<script src="https://kit.fontawesome.com/a076d05399.js"></script>
	<meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1.0, miximum-scale=3.0, minimum-scale=1.0">
	<link rel="stylesheet" href="../css/estilosLoginSignUp.css">
        <script src="../js/validacionDatos.js" type="text/javascript"></script>
	<title>Iniciar Sesion</title>
</head>
<body>

    <form class="formulario" action="validadSesion.jsp" method="post">
		<h1>Iniciar Sesion</h1>
		<div class="contenedor">
			<div class="input-contenedor">
				<i class="fas fa-user icon"></i>
				<input type="text" id="usuario" name="usuario" placeholder="Nombres del Usuario" maxlength="50" required>
			</div>
			<div class="input-contenedor">
				<i class="fas fa-key icon"></i>
				<input type="password" id="clave" name="clave" placeholder="Contraseña" maxlength="50" required>
			</div>
                    <input type="submit" value="Iniciar sesion" class="button" onclick="validarLogin()">
			<p>Inicie sesion con sus datos previamnete registrados en el sistema.</p>
			<hr>
			<p>¿Deseas crear una cuenta? <a class="link" href="../index.jsp">Registrate</a></p>
		</div>
	</form>
</body>
</html>
