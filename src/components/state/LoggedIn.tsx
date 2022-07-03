import { useState } from "react";

// https://www.youtube.com/watch?v=LNpWuRUIR5A&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=10
const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn ? "Logged in" : "logged out"}</div>
    </div>
  );
};

export default LoggedIn;
