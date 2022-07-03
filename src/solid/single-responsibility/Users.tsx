import { useEffect } from 'react';

import UserDetails from "./UserDetails";
import UserServices from "./UserServices";
import UserForm from "./UserForm";
import Loading from "./Loading";

import { IUserForm, IUsers } from './Users.types';

const Users = () => {
  const { users, user, getUser, getUsers, deleteUsers, createUser, updateUser, loading, deletingProcess } = UserServices();

  useEffect(() => {
    getUsers();
  }, []);  

  const editUserSend = (data: IUsers) => {
    getUser(data);
  }

  const createUserSend = (data: IUserForm) => {
    createUser(data);
  }

  const deleteUserSend = (id: string) => {
    deleteUsers(id)
  }

  const updateUserSend = (data: IUsers) => {
    updateUser(data);
  }

  return (
    <>
      <UserForm createUserSend={createUserSend} editUser={user} updateUserSend={updateUserSend}/>
      <Loading check={loading} deletingProcess={deletingProcess}>
        <UserDetails users={users} deleteUserSend={deleteUserSend} editUserSend={editUserSend} />
      </Loading>
    </>
  );
};

export default Users;
