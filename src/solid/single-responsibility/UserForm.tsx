import { useEffect, useState } from "react";
import { IUsers } from "./Users.types";

type UserFormProps = {
  createUserSend: (data: IUserForm) => void;
  editUser: IUsers;
  updateUserSend: (data: IUsers) => void;
};
interface IUserForm {
  name: string;
  surname: string;
  age: number | null;
}

const initialUser = {
  name: "",
  surname: "",
  age: null,
};
const UserForm = ({ createUserSend, updateUserSend, editUser }: UserFormProps) => {
  const [user, setUser] = useState<IUserForm>(initialUser);

  useEffect(() => {
    if (editUser.id) {
        const { name, surname, age } = editUser;
        setUser({
          name,
          surname,
          age,
        });      
    }
  }, [editUser]);

  const handeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const clearInputs = () => {
    setUser(initialUser);
  };

  const createUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUserSend(user);
    clearInputs();
  };

  const updateUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateUserSend({
      ...user,
      id:editUser.id
    });
    clearInputs();
  };

  const { name, surname, age } = user;


  return (
    <form
      onSubmit={editUser.id ?  updateUser : createUser}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <input
        onChange={handeChange}
        style={{ width: "30%", height: "30px" }}
        value={name}
        type="text"
        name="name"
        placeholder="Name..."
      />
      <input
        onChange={handeChange}
        style={{ width: "30%", height: "30px", margin: "10px 0px" }}
        value={surname}
        type="text"
        name="surname"
        placeholder="Surname..."
      />
      <input
        onChange={handeChange}
        style={{ width: "30%", height: "30px" }}
        value={age === null ? "" : age}
        type="number"
        name="age"
        placeholder="Age..."
      />
      <button style={{ width: "30%", margin: "10px 0px" }}>Submit</button>
    </form>
  );
};

export default UserForm;
