import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
      setUser({
          name:'mert',
          email: "asdas@gmail.com"
      })
  };
  const handleLogout = () => {
      setUser({} as AuthUser);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user.email}</div>
      <div>User email is {user.name}</div>
    </div>
  );
};

export default User;
