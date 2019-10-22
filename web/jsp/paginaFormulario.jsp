<%-- 
    Document   : paginaFormulario
    Created on : 21/10/2019, 11:25:11 AM
    Author     : 1017157887
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        <%= request.getParameter("nombres") %>
        <%= request.getParameter("descripcion") %>
        <%= request.getParameter("cantidad-aspectos") %>
        <%= request.getParameter("cantidad-sub-aspectos") %>
        <%= request.getParameter("cantidad-desemp") %>
        
    </body>
</html>
