const fs = require("fs");

const funcionesTareas = {
    nombreArchivo: "./tareas.json",

    leerNotas: function(){
        return JSON.parse(fs.readFileSync(this.nombreArchivo, "utf-8"));
    },
    

    filtrarPorEstado: function(estado){
        let notas = this.leerNotas();
        //return this.leerNotas().filter((unaNota) => unaNota.estado === estado);
        return notas.filter((unaNota) => unaNota.estado === estado);
    }

    /*escribirJSON: function (array){
        return JSON.stringify(fs.writeFileSync(this.nombreArchivo, array, "utf-8"));
    },

    crearTarea: function(a,b){
        let notas = this.leerNotas(); 
        function Notas(titulo, estado){
            notas.titulo = titulo;
            notas.estado = estado;
        };
        let nuevoElemento = new Notas(a, b);
        return nuevoElemento;
    },

    guardarTarea: function(objetoLiteral){
        let notas = this.leerNotas();
        let arrayNotas = notas.push(objetoLiteral);
        return arrayNotas;
    }*/
}

module.exports = funcionesTareas;

