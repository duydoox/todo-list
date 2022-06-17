import React, {useContext} from "react";
import { ADD_TODO } from "../reducer/Types";
import {TodoContext} from "../context/TodoContext";
import { v4 as uuidv4 } from "uuid";

const Header = () => {
    const {dispatch} = useContext(TodoContext)



    const enter = (e) => {
        if(e.key === 'Enter'){
            const value = e.target.value
            if(value != ''){
                e.target.value = ''
                dispatch({
                    type: ADD_TODO,
                    payload: {
                        todo: {
                            id: uuidv4(),
                            title: value,
                            completed: false
                        }
                    }
                })
            }
        }
    }
    
    return (
        <header>
            <h1>To do list</h1>
            <input id = "input" onKeyDown={enter}></input>
        </header>
    )
}

export default Header