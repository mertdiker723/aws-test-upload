import { TodoState, TodoAction } from "../types";

export const todoReducer = (state: TodoState[], action: TodoAction) => {
    switch (action.type) {
        case 'load':
            return action.payload as TodoState[];
        case 'create':
            return [...state, action.payload] as TodoState[];
        case 'remove':
            const deletedVal = action.payload as TodoState;
            return state.filter(item => item.id !== deletedVal.id)
        case 'update':
            const val = action.payload as { id: number; data: TodoState; };
            return state.map(item => item.id === val.id ? val.data : item);
        default:
            return state;
    }
}
