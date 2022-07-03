import { useState } from "react";
import axios from "axios";

import { IUsers, IUserForm } from "./Users.types";

const url = "https://60573021055dbd0017e8483a.mockapi.io/users";

const UserServices = () => {
  const [users, setUsers] = useState<IUsers[]>([]);
  const [user, setUser] = useState<IUsers>({} as IUsers);

  const [loading, setLoading] = useState<boolean>(false);
  const [deletingProcess, setDeletingProcess] = useState<boolean>(false);
  
  const getUsers = () => {
    setLoading(false);
    axios
      .get<IUsers[]>(url)
      .then((res) => {
        setUsers(res.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getUser = (data : IUsers) => {
    axios.get<IUsers>(`${url}/${data.id}`)
    .then(item => {
      setUser(item.data);
    })
    .catch(err => {
      console.log(err.message);
    })
  }

  const deleteUsers = (id: string) => {
    setDeletingProcess(true);
    axios
      .delete<IUsers>(`${url}/${id}`)
      .then((item) => {
        const { data } = item;
        const newUser = users.filter((user) => user.id !== data.id);
        setUsers(newUser);
        setDeletingProcess(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const createUser = (data: IUserForm) => {
    axios
      .post<IUsers>(`${url}`, data)
      .then((res) => {
        const { data } = res;
        setUsers([...users, data]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const updateUser = (data: IUsers) => {
    axios.put<IUsers>(`${url}/${data.id}`, data).then((res) => {
      const { data } = res;
      const updatedUsers = users.map((item) =>
        item.id !== data.id ? item : data
      );
      setUsers(updatedUsers);
    })
    .catch((err) => {
      console.log(err.message);
    })
  };

  return {
    users,
    user,
    getUsers,
    getUser,
    deleteUsers,
    createUser,
    updateUser,
    loading,
    deletingProcess,
  };
};

export default UserServices;
