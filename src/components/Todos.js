import React, {useEffect, useContext} from "react";
import { GET_TODOS, SAVE } from "../reducer/Types";
import TodoItem from "./TodoItems";
import { TodoContext } from "../context/TodoContext";

const Todos = () => {
    const {todos, dispatch} = useContext(TodoContext)

    useEffect(()=>{
        dispatch({
            type: GET_TODOS,
            payload: null
        })
    }, [])

    useEffect(()=>{
        dispatch({
            type: SAVE,
            payload: null
        })
    }, [todos])

    return (
        <div>
            {todos.map(todo => {
                return <TodoItem key={todo.id} todo={todo}/>
            })}
        </div>
    )
}

export default Todos