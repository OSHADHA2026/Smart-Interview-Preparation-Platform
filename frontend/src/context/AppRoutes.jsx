import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    // authentication state
    const [user, setUser] = useState("");
    const [token, setToken] = useState(localStorage.getItem("token") || null);

    // login function
    const login = (userData, token) => {
        setUser(userData);
        setToken(token);
        localStorage.setItem(
        "user",
        JSON.stringify(userData)
);
    };

    // logout function
    const logout = () => {
        setUser("");
        setToken(null);
        localStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;