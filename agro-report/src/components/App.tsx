'use client'

import React, { useState, useEffect } from 'react';
import { Login } from './Login';
import { Dashboard } from './Dashboard';

interface User {
  name: string;
  role: string;
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoggedInUser = () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setIsLoading(false);
    };

    checkLoggedInUser();
  }, []);

  const handleLogin = (email: string, password: string) => {
    if (email === 'demo@example.com' && password === 'password') {
      const newUser = { name: 'Demo User', role: 'gerente_produto' };
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
    } else {
      alert('Credenciais inválidas');
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">AgroReport</h1>
          {user && (
            <button 
              onClick={handleLogout}
              className="bg-white text-green-600 px-4 py-2 rounded hover:bg-green-100 transition-colors"
            >
              Sair
            </button>
          )}
        </div>
      </header>
      <main className="container mx-auto mt-8 p-4">
        {user ? (
          <Dashboard user={user} />
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </main>
    </div>
  );
}

