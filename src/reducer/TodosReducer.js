import { GET_TODOS, DEL_TODO, ADD_TODO, COMPLETE, DEL_ALL, SAVE } from "./Types";

export const todosReducer = (state, {type, payload}) => {
    switch(type){
        case GET_TODOS:
            const todos = localStorage.getItem('todos')
            return todos ?  JSON.parse(todos) : state
        case SAVE:
            localStorage.setItem('todos', JSON.stringify(state))
            return state
        case ADD_TODO:
            return [...state, payload.todo]
        case DEL_TODO:
            return state.filter(todo => todo.id !== payload.id)
        case COMPLETE:
            return state.map(todo => {
                if(todo.id === payload.id) todo.completed = !todo.completed
                return todo
            })
        case DEL_ALL:
            return []
        default:
            return state
    }
}