import { IUsers } from "./Users.types";

type UserProps = {
  users: IUsers[];
  deleteUserSend: (id: string) => void;
  editUserSend: (data: IUsers) => void;
};
const UserDetails = ({ users, deleteUserSend, editUserSend }: UserProps) => {
  return (
    <ul>
      {users.map((item) => {
        return (
          <li key={item.id}>
            {item.name} - {item.surname} - {item.age}
            <button onClick={() => deleteUserSend(item.id)}>Delete</button>
            <button onClick={() => editUserSend(item)}>Edit</button>
          </li>
        );
      })}
    </ul>
  );
};

export default UserDetails;
