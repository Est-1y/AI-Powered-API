import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/admin/users", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => setUsers(res.data));
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {users.map((user) => (
        <div key={user._id}>{user.username} - {user.role}</div>
      ))}
    </div>
  );
}
