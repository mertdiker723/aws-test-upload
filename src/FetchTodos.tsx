import { useState } from "react";
import axios from "axios";

interface Todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const FetchTodos = () => {
  const [state, setState] = useState<Todos[]>([]);

  const clickFetch = () => {
    axios
      .get<any>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => console.log(err));
  };

  return { state, clickFetch };
};

export default FetchTodos;
