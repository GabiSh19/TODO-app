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

export default {
    initStore,
}

