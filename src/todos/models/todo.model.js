import { v4 as uuid } from 'uuid';


export class Todo {

    /**
     * 
     * @param {String} descripcion 
     */

    constructor ( descripcion ){
        // Usamos uuid para identificar de forma única cada una de las tareas.
        this.id = uuid();
        this.descripcion = descripcion;
        this.done = false;
        this.createdAt = new Date();

    }


}