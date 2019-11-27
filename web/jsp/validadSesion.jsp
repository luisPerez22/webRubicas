<%-- 
    Document   : validadSesion
    Created on : 27/11/2019, 12:48:45 AM
    Author     : kevin
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="edu.cecar.logica.Docente" %>
<%@page import="edu.cecar.persistencia.Conexion" %>
<%@page session="true" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <%

            Conexion c = new Conexion();

            if (c.login(request.getParameter("usuario"), request.getParameter("clave"))) {

                HttpSession misesion = request.getSession();
                misesion.setAttribute("usuario", request.getParameter("usuario"));
                response.sendRedirect("dashboard.jsp");

            } else {
                response.sendRedirect("iniciarSesion.jsp");
            }
        %>
    </body>
</html>
