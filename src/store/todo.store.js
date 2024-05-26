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

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    throw new Error('Not implemented');
};

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = (todoId) => {
    throw new Error('Not implemented');
}

/**
 * 
 * @param {String} todoId 
 */
const deletedTodo = (todoId) => {
    throw new Error('Not implemented');
}

const deleteCompleted = () => {
    throw new Error('Not implemented');
}

const setFilter = ( newFilter = Filters.All ) => {
    throw new Error('Not implemented');
}

const getCurrentFilter = () => {
    throw new Error('Not implemented');
}


export default {
    addTodo, 
    deleteCompleted, 
    deletedTodo, 
    getCurrentFilter, 
    initStore,
    loadStore, 
    loadStore, 
    setFilter, 
    toggleTodo, 
}

