export interface ITodo {
    id: number;
    title: string;
    complete: boolean;
}

export interface ITodoPayload {
    payload: ITodo;
    type: string;
}