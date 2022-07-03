export interface TodoState {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface TodoAction {
    type: string;
    payload: TodoState[] | TodoState | number | {
        id: number;
        data: TodoState
    };
}

