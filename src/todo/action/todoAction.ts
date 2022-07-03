

import { ITodo } from "../types";


const todoActionSuccess = (todo: ITodo) => {
    return {
        type: "COMPLETED",
        payload: todo,
    }
}


export {
    todoActionSuccess
}