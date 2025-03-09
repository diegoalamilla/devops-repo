class Alumnos{
    constructor(nombre, matricula){
        this.nombre = nombre;
        this.matricula = matricula;
    }
}
class Profesores{
    constructor(nombre, numeroEmpleado){
        this.nombre = nombre;
        this.numeroEmpleado = numeroEmpleado;
    }
}

module.exports = {Alumnos, Profesores};