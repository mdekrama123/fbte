
import { useState } from "react";

function UserLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [users, setUsers] = useState([]);

  const handleLogin = () => {
    // ইউজারনেম এবং পাসওয়ার্ড যাচাই করা হবে (এটা সাধারণত ডাটাবেস চেক করতে হয়)
    setUsers([...users, { username, password }]); // ডেমো হিসেবে, ইউজারের ডাটা রাখা হচ্ছে
    setLoggedInUser({ username, password }); // লগইন হওয়া ইউজারের তথ্য স্টোর করা হবে
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <button onClick={handleLogin}>Login</button>
        </>
      ) : (
        <div>
          <h2>Welcome, {loggedInUser.username}!</h2>
          <p>Your password: {loggedInUser.password}</p>
          <h3>All Users:</h3>
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                {user.username} - {user.password}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserLogin;
