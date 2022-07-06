export interface TodoState {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface TodoAction {
    type: string;
    payload: TodoState[] | TodoState | {
        id: number;
        data: TodoState
    };
}

