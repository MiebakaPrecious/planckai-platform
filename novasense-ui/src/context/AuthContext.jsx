import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Create Context
const AuthContext = createContext();

// Context Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);        // Store user info
  const [token, setToken] = useState(null);      // JWT Token
  const [loading, setLoading] = useState(true);  // Initial loading state

  // Load token on startup
  useEffect(() => {
    const savedToken = localStorage.getItem("token");

    if (savedToken) {
      setToken(savedToken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${savedToken}`;
      fetchUser();
    } else {
      setLoading(false);
    }
  }, []);

  // Fetch user details (optional API)
  const fetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auth/me");
      setUser(res.data.user);
    } catch (err) {
      console.log("Invalid token. Logging out...");
      logout();
    } finally {
      setLoading(false);
    }
  };

  // Handle login
  const login = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    fetchUser();
  };

  // Handle logout
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        logout,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook for easy access
export const useAuth = () => useContext(AuthContext);