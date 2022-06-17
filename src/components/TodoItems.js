import React, {useContext} from "react";
import { DEL_TODO, COMPLETE } from "../reducer/Types";
import { TodoContext } from "../context/TodoContext";


const TodoItem = ({todo}) => {
    const {dispatch} = useContext(TodoContext)

    const change = () => {
        dispatch({
            type: COMPLETE,
            payload: {
                id: todo.id
            }
        })
    }

    const delTodo = () => {
        dispatch({
            type: DEL_TODO,
            payload: {
                id: todo.id
            }
        })
    }

    const styleComplete = {
        textDecoration: todo.completed ? 'line-through' : 'none'
    }
    return (
        <div className="item">
            <div style={styleComplete}>
                <input type="checkbox" checked={todo.completed} onChange={change}/>
                {todo.title}   
            </div>
            <button onClick={delTodo}>xóa</button>
        </div>
    )
}

export default TodoItem