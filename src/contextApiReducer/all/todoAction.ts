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