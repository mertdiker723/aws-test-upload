import { v4 as uuidv4 } from 'uuid';
import { useEffect, useReducer } from "react";
import { todoReducer } from "../all/todoReducer";
import { loadActionSuccess, createActionSucces, removeActionSuccess, updateActionSuccess } from "../all/todoAction";
import { TodoState } from "../types";

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        const x: TodoState[] = [...json];
        dispatch(loadActionSuccess(x))
      })

  }, [])

  const onCreate = () => {
    dispatch(createActionSucces({ userId: 1, id: Math.random() * 10, title: "hasan", completed: true }));
  }

  const onRemove = (data: TodoState) => {
    dispatch(removeActionSuccess(data))
  }

  const onUpdate = (id: number) => {
    dispatch(updateActionSuccess(id, { userId: 11, id: id, title: "zalo", completed: true }))
  }

  return (
    <>
      <button onClick={onCreate}>Add</button>
      <ul>
        {
          state.map(item => {
            return (
              <li key={item.id}>
                {item.title} - {item.id}
                <button onClick={() => onRemove(item)}>Delete</button>
                <button onClick={() => onUpdate(item.id)}>Update</button>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default App