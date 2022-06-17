import React, {useContext} from "react";
import { DEL_ALL } from "../reducer/Types";
import { TodoContext } from "../context/TodoContext";

const DeleteAll = () => {
    const {dispatch} = useContext(TodoContext)

    const delAll = () => {
        dispatch({
            type: DEL_ALL,
            payload: null
        })
    }

    const style = {
        color: '#333',
        background: '#fff',
        padding: '5px 15px',
        outline: 'none',
        margin: '10px',
        border: 'none',
        fontSize: '1em',
        borderRadius: '5px',
        fontWeight: '500'
    }

    return <div>
        <button style={style} onClick={delAll}>Delete All</button>
    </div>
}

export default DeleteAll