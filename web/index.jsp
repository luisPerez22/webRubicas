<%-- 
    Document   : registrarse
    Created on : 25-nov-2019, 19:29:52
    Author     : LUIS-PEREZ
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<script src="https://kit.fontawesome.com/a076d05399.js"></script>
	<meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1.0, miximum-scale=3.0, minimum-scale=1.0">
	<link rel="stylesheet" href="css/estilosLoginSignUp.css">
        <script src="js/validacionDatos.js" type="text/javascript"></script>
	<title>Registrarse</title>
</head>
<body>
    <form class="formulario" action="jsp/registrarDocente.jsp" method="post"">
		<h1>Registrate</h1>
		<div class="contenedor">
			<div class="input-contenedor">
				<i class="fas fa-user icon"></i>
                                <input type="text" id="nombres" name="nombres" placeholder="Nombres del Usuario" maxlength="50" required>
			</div>
			<div class="input-contenedor">
				<i class="fas fa-user icon"></i>
				<input type="text" id="apellidos" name="apellidos" placeholder="Apellidos del Usuario" maxlength="50" required>
			</div>
			<div class="input-contenedor">
				<i class="fas fa-award icon"></i>
				<input type="text" id="areaconocimiento" name="areaconocimiento" placeholder="Area del conocimiento" maxlength="50" required>
			</div>
			<div class="input-contenedor">
				<i class="fas fa-envelope icon"></i>
				<input type="email" id="correo" name="correo" placeholder="Correo electronico" maxlength="50" required>
			</div>
			<div class="input-contenedor">
				<i class="fas fa-quote-left icon"></i>
				<input type="text" id="usuario" name="usuario" placeholder="Nombre de usuario (Nickname)" maxlength="50" required>
			</div>
			<div class="input-contenedor">
				<i class="fas fa-key icon"></i>
				<input type="password" id="clave" name="clave" placeholder="Contraseña" maxlength="50" required>
			</div>
                    
                    
			<input type="submit" value="Registrarse" onclick="validarRegistro()" class="button">
			<p>Registrarse con sus datos de docente para gestionar rubricas</p>
			<hr>
			<p>¿Ya tienes una cuenta? <a class="link" href="jsp/iniciarSesion.jsp">Iniciar Sesion</a></p>
		</div>
	</form>
</body>
</html>

