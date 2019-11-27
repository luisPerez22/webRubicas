<%-- 
    Document   : cerrarSesion
    Created on : 26/11/2019, 11:49:29 PM
    Author     : kevin
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <%
            HttpSession misesion = request.getSession();
            String nombre = (String) misesion.getAttribute("usuario");

            if (nombre != null) {
                nombre = null;
                session.invalidate();
                
            }
            response.sendRedirect("iniciarSesion.jsp");
        %>
    </body>
</html>
