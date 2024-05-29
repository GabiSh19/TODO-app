import html from './app.html?raw';
import todoStore, { Filters } from '../store/todo.store';
import { renderTodos } from './use-cases';

const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input', 
    ClearCompleted: '.clear-completed',
    TodoFilters: '.filtro'
}; 

/**
 * 
 * @param {String} elementId  e  
 */

export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        console.log(todos)
        renderTodos( ElementIDs.TodoList, todos );

    }


    //Cuando la función App() se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append( app );
        displayTodos(); 
    })();

    // Referencias HTML 
    const newDescriptionInput =  document.querySelector( ElementIDs.NewTodoInput );
    const todoListUL =  document.querySelector( ElementIDs.TodoList );
    const clearCompletedButton = document.querySelector( ElementIDs.ClearCompleted);
    const filtersLIs  = document.querySelectorAll( ElementIDs.TodoFilters );

    //Listeners 
    newDescriptionInput.addEventListener('keyup', (event) => {
        if (event.keyCode !== 13 ) return;
        if (event.target.value.trim().length === 0) return;

        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value = '';

    })

    todoListUL.addEventListener('click', (event) => {
        // console.log(event.target);
        //closest: que busque el padre más cercano que tenga esta data-id. No para abajo, si no el padre. 
        const element = event.target.closest('[data-id]');
        //necesito extraer el id. 
        // console.log(element.getAttribute('data-id'));
        todoStore.toggleTodo((element.getAttribute('data-id')));
        displayTodos();

    })
    
    // Función para borrar Todo
    
    todoListUL.addEventListener('click', (event) => {
        const isDestroyElement = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]');
        
        if (!element || !isDestroyElement) return;

        todoStore.deletedTodo (element.getAttribute('data-id'));
        displayTodos();

    })

    clearCompletedButton.addEventListener('click', () => {
        todoStore.deleteCompleted();
        displayTodos();
    });

    filtersLIs.forEach( element  => {
        filtersLIs.forEach( el => el.classList.remove('selected'));
        element.target.classList.add('selected');

        switch ( element.target.text ) {
            case 'Todos': 
                todoStore.setFilter( Filters.All )
                break;
            case 'Pendientes': 
                todoStore.setFilter( Filters.Pending )
                break;
            case 'Completados': 
                todoStore.setFilter( Filters.Completed )
                break;
        }

        displayTodos();
    });
} 