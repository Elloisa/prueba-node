const funcionesTareas = require("./funcionesTareas.js");

const instruccion = process.argv[2];

let tareas = [];

switch(instruccion){
    case "listar":

    //traigo todas las notas
        tareas = funcionesTareas.leerNotas();
        console.log("----------------------------");
        console.log("LISTADO DE TAREAS");
        console.log("----------------------------");
        tareas.forEach((unaTarea) => {
            console.log(unaTarea.titulo + " - " + unaTarea.estado);
        })
        break;
    
        case "filtrar":
            let estado = process.argv[3];

            //traigo todas las notas filtrando por estado
            tareas = funcionesTareas.filtrarPorEstado(estado);
            console.log("-------------------------");
            console.log("TAREAS CON ESTADO: " + estado);
            console.log("---------------------------------");
            tareas.forEach((unaTarea) => {
                console.log(unaTarea.titulo);
            })
            break;

        case "crear":
            let nuevaTarea = process.argv[3];
            //arrayTareas = funcionesTareas.leerNotas();
            //nuevaVariable = {titulo: nuevaTarea , estado: "pendiente"};
            //tareas = {titulo: nuevaTarea, estado: "pendiente"};
            //funcionesTareas.guardarTarea(tareas);
            let nuevaLista = funcionesTareas.crearTarea(nuevaTarea, "pendiente");
            tareas = funcionesTareas.guardarTarea(nuevaLista);
            funcionesTareas.escribirJSON(tareas);
            console.log("-------------------------------");
            console.log("SE HA AGREGADO LA TAREA CON TITULO: " + nuevaLista.titulo);
            console.log("SE HA AGREGADO LA TAREA CON ESTADO: " + nuevaLista.estado);
            console.log("-------------------------------");
            break;

        case undefined:
            console.log("Indica una acción")
            break;
        default:
            console.log("No te entiendo");

}
