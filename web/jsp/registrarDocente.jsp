<%-- 
    Document   : registrarDocente
    Created on : 26/11/2019, 07:46:18 PM
    Author     : kevin
--%>
<%@page import="edu.cecar.logica.Docente" %>
<%@page import="edu.cecar.persistencia.Conexion" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <%
            Docente d = new Docente();
            Conexion c = new Conexion();
            d.setNombres(request.getParameter("nombres"));
            d.setApellidos(request.getParameter("apellidos"));
            d.setAreaConocimiento(request.getParameter("areaconocimiento"));
            d.setUsuario(request.getParameter("usuario"));
            d.setContrasena(request.getParameter("contrasena"));
            d.setCorreo(request.getParameter("correo"));
            c.ingresoDatos(d);
            response.sendRedirect("iniciarSesion.jsp");
            %>
    </body>
</html>
