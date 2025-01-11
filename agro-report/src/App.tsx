'use client'

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface User {
  name: string;
  role: string;
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    console.log('App mounted');
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = () => {
    const newUser = { name: 'Demo User', role: 'gerente_produto' };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  console.log('App rendering, user:', user);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>AgroReport</CardTitle>
        </CardHeader>
        <CardContent>
          {user ? (
            <>
              <p>Bem-vindo, {user.name}!</p>
              <p>Função: {user.role}</p>
              <Button onClick={handleLogout} className="mt-4">Sair</Button>
            </>
          ) : (
            <Button onClick={handleLogin}>Entrar</Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

