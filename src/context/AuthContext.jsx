import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const savedUser = localStorage.getItem('cf_current_user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    const register = (name, email, password) => {
        const users = JSON.parse(localStorage.getItem('cf_users') || '[]');

        if (users.find(u => u.email === email)) {
            return { success: false, error: 'Email is already registered' };
        }

        const newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem('cf_users', JSON.stringify(users));

        const sessionUser = { name, email };
        localStorage.setItem('cf_current_user', JSON.stringify(sessionUser));
        setUser(sessionUser);
        setIsAuthenticated(true);

        return { success: true };
    };

    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem('cf_users') || '[]');
        const found = users.find(u => u.email === email && u.password === password);

        if (!found) {
            return { success: false, error: 'Invalid email or password' };
        }

        const sessionUser = { name: found.name, email: found.email };
        localStorage.setItem('cf_current_user', JSON.stringify(sessionUser));
        setUser(sessionUser);
        setIsAuthenticated(true);

        return { success: true };
    };

    const logout = () => {
        localStorage.removeItem('cf_current_user');
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, isLoading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
