/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.cecar.persistencia;


import edu.cecar.logica.Docente;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;


/**
 *
 * @author namuel.solorzano
 */
public class Conexion {
    private Connection con;
    private Statement stm;
    
    public Conexion(){
        try{
            
            //Class.forName("com.mysql.jdbc.Driver").newInstance();
            //con = DriverManager.getConnection("jdbc:mysql://localhost:3306/personas", "root","");
            Class.forName("org.apache.derby.jdbc.ClientDriver").newInstance();
            con = DriverManager.getConnection("jdbc:derby://localhost:1527/dbDocente", "root","root");
            stm = con.createStatement();
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
    
    public boolean ingresoDatos(Docente docente){
        boolean registrado = false;
        try{
            
            int i = stm.executeUpdate("INSERT INTO docente VALUES ('"+ docente.getNombres()+"','"+ docente.getApellidos()+"','"+
                    docente.getAreaConocimiento()+"','"+docente.getUsuario()+"','"+docente.getContrasena()+"','"+docente.getCorreo()+"')");
            if(i > 0){
                registrado = true;
            }
        }
        catch(Exception e){
            
        }
        
        return registrado;
    }
    
//    public boolean eliminarRegistro(String usuario){
//        boolean eliminado = false;
//        try{
//            
//            int i = stm.executeUpdate("DELETE FROM docente WHERE usuario = '" + usuario+"'");
//            if(i > 0){
//                eliminado = true;
//            }
//        }
//        catch(Exception e){
//            
//        }
//        return eliminado;
//    }
//    
     public boolean actualizarRegistro(Docente docente){
        boolean actualizado = false;
        try{
           
            int i = stm.executeUpdate("UPDATE docente SET nombres = '"+ docente.getNombres()+ "', apellidos = '"+docente.getApellidos()+"', areaconocimiento = '"
                    +docente.getAreaConocimiento()+"', usuario = '"+docente.getUsuario()+"', contrasena = '"+docente.getContrasena()+"', correo = '"+docente.getCorreo()+
                    "' WHERE usuario = '"+ docente.getUsuario()+"'");
            if(i > 0){
                actualizado = true;
                System.out.println("si");
            }
        }
        catch(Exception e){
            
        }
        return actualizado;
    }
     
         
     public Docente buscar(String usuario) {
             Docente docente = new Docente();
             ResultSet rs = null;
            
             try{ 
                    
                    rs = stm.executeQuery("SELECT * FROM docente WHERE usuario= '"+usuario+"'");
                    rs.next();
                    docente.setNombres(rs.getString("nombres"));
                    docente.setApellidos(rs.getString("apellidos"));
                    docente.setAreaConocimiento(rs.getString("areaconocimiento"));
                    docente.setUsuario(rs.getString("usuario"));
                    docente.setContrasena(rs.getString("contrasena"));
                    docente.setCorreo(rs.getString("correo"));
             }
             catch(Exception e){
                 e.printStackTrace();
             }
             return docente;
     }
     
     public ArrayList<Docente> listar() {
            ArrayList <Docente> docentes = new ArrayList();
            try{ 
                    
                    ResultSet rs = stm.executeQuery("SELECT * FROM docente");
                    while(rs.next()){
                        Docente docente = new Docente();
                        docente.setNombres(rs.getString("nombres"));
                        docente.setApellidos(rs.getString("apellidos"));
                        docente.setAreaConocimiento(rs.getString("areaconocimiento"));
                        docente.setUsuario(rs.getString("usuario")); 
                        docente.setContrasena(rs.getString("contrasena"));
                        docente.setCorreo(rs.getString("correo"));
                        docentes.add(docente);
                    }
             }
             catch(Exception e){
                 e.printStackTrace();
             }
        
          return docentes;
     }
    
    
}
