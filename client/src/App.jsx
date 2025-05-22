import React, { useState } from "react";
import Navbar from "./components/common/Nevbar";
import LoginForm from "./components/auth/LoginForm";
import VaultDashboard from "./components/vault/vaultDeshboard";
import AllRoutes from "./components/routes/AllRoutes";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Dummy login handler for now
  const handleLogin = async ({ email, password }) => {
    setLoading(true);

    setTimeout(() => {
      setUser({ email });
      setLoading(false);
    }, 1000);
  };

  const handleLogout = () => setUser(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <Navbar user={user} onLogout={handleLogout} />
     <AllRoutes/>
    </div>
  );
}

export default App;