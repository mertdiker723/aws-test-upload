import { TodoState } from "../types";

export const loadActionSuccess = (data: TodoState[]) => {
    return {
        type: "load",
        payload: data
    }
}

export const createActionSucces = (data: TodoState) => {
    return {
        type: "create",
        payload: data
    }
}

export const removeActionSuccess = (data: TodoState) => {
    return {
        type: "remove",
        payload: data
    }
}


export const updateActionSuccess = (id: number, data: TodoState) => {
    return {
        type: "update",
        payload: {
            id,
            data
        }
    }
}

