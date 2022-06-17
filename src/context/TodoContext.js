import React, {createContext, useReducer} from "react";
import { todosReducer } from "../reducer/TodosReducer";
// import { v4 as uuidv4 } from "uuid";
// import axios from "axios";

export const TodoContext = createContext()

const TodoContextProvider = ({children}) => {

    const [todos, dispatch] = useReducer(todosReducer, [])

    const todoContextData = {
        todos,
        dispatch
    }

    return (
        <TodoContext.Provider value={todoContextData}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider