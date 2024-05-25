export class Todo {

    /**
     * 
     * @param {String} descripcion 
     */

    constructor ( descripcion ){
        this.id = 1;
        this.descripcion = descripcion;
        this.done = false;
        this.createdAt = new Date();

    }


}