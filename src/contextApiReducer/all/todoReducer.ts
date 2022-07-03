import { TodoState, TodoAction } from "../types";

export const todoReducer = (state: TodoState[], action: TodoAction) => {

    switch (action.type) {
        case 'load':
            return action.payload
        // case 'create':
        //     return [...state, action.payload]
        default:
            return state;
    }
}
