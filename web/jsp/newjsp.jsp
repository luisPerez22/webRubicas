<%-- 
    Document   : newjsp
    Created on : 24/11/2019, 09:41:05 PM
    Author     : pc
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
         <h1><%= request.getParameter("desempeno") %></h1>
          <h1><%= request.getParameter("asp1") %></h1>
          <h1><%= request.getParameterMap() %></h1>
    </body>
</html>
