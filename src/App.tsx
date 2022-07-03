import { v4 as uuidv4 } from 'uuid';
import { useEffect, useReducer } from "react";
import { todoReducer } from "./contextApiReducer/all/todoReducer";
import { loadActionSuccess, createActionSucces } from "./contextApiReducer/all/todoAction";
import { TodoState } from "./contextApiReducer/types";


const App = () => {
  const [state, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        const x: TodoState[] = [...json];
        console.log("json", x);
        dispatch(loadActionSuccess(x))
      })

  }, [])


  console.log("app", state);


  const onCreate = () => {
    // dispatch(createActionSucces({ userId: 1, id: Math.random() * 10, title: "hasan", completed: true }));
  }


  return (
    <>
      <button onClick={onCreate}>Add</button>

    </>
  )
}

export default App