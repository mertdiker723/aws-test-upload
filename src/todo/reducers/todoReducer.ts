
import { ITodo, ITodoPayload } from "../types";

const todoReducer = (state: ITodo[], action: ITodoPayload) => {
    switch (action.type) {
        case "COMPLETED":
            return state.map((item) => item.id === action.payload.id ? { ...action.payload, complete: !action.payload.complete } : item);
        default:
            return state;
    }
}

export default todoReducer;