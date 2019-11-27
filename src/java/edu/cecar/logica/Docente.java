/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.cecar.logica;

/**
 *
 * @author namuel.solorzano
 */
public class Docente {
    private String nombres;
    private String apellidos;
    private String areaConocimiento;
    private String usuario;
    private String contrasena;
    private String correo;
    
    public Docente(){
        this.nombres = "";
        this.apellidos = "";
        this.areaConocimiento = "";
        this.usuario = "";
        this.contrasena = "";
        this.correo = "";
        
    }

    public Docente(String nombres, String apellidos, String areaConocimiento, String usuario, String contrasena, String correo) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.areaConocimiento = areaConocimiento;
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.correo = correo;
    }
    

    public String getNombres() {
        return nombres;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getAreaConocimiento() {
        return areaConocimiento;
    }

    public void setAreaConocimiento(String areaConocimiento) {
        this.areaConocimiento = areaConocimiento;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    
      
    
}
