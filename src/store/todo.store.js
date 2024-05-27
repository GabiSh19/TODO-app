import { Todo } from '../todos/models/todo.model';

const Filters = {
    All: 'all',
    Completed: 'Completed', 
    Pending: 'Pending'
}

const state = {
    todos : [
        new Todo('Todo1'),
        new Todo('Todo2'),
        new Todo('Todo2'),
    ],
    filter: Filters.All
}

const initStore = () => {

    console.log(state);
    console.log('InitStore');

}

const loadStore = () => {
    throw new Error('Not implemented');
}

const getTodos = ( filter = Filters.Allll ) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos];

        case Filters.Completed:
            return state.todos.filter( todo => todo.done);

        case Filters.Pending:
            return state.todos.filter( todo => !todo.done);

        default:
            throw new Error(`Option ${filter} is not valid`);
    }


}


/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    if ( !description ) throw new Error('Description is required');
    state.todos.push ( new Todo( description ) );
};

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = (todoId) => {
    // El map Regresa los nuevos valores que va a tener ese arreglo. Regresa un nuev arreglo.
    // El único problema con el map es que si tenemos 1000 todos, barreriamos todo. con un find podríamos arreglar eso.
    state.todos = state.todos.map ( todo => {
        if ( todo.id === todoId ) {
            todo.done = !todo.done;
        }
        // Tengo que regresar esa instancia.
        return todo;
    });
}

/**
 * 
 * @param {String} todoId 
 */
const deletedTodo = (todoId) => {
    states.todos = state.todos.filter( todo => todo.id !== todoId );
}

const deleteCompleted = () => {
    states.todos = state.todos.filter( todo => todo.done );
    
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = ( newFilter = Filters.All ) => {
    //Para hacer una validación podríamos hacerlo así:
    //Averiguar: ** Objetc.key(Filters).include ....
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
}       


export default {
    addTodo, 
    deleteCompleted, 
    deletedTodo, 
    getCurrentFilter, 
    getTodos, 
    initStore,
    loadStore, 
    loadStore, 
    setFilter, 
    toggleTodo, 
}

