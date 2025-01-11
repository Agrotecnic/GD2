'use client'

import React, { useState } from 'react';
import { signUp } from '../services/firebase';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from 'next/link'

export const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await signUp(name, email, password);
      setSuccess(true);
    } catch (error) {
      console.error("Signup error:", error);
      setError(error instanceof Error ? error.message : 'Erro ao criar conta');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Conta Criada</CardTitle>
          <CardDescription>
            Sua conta foi criada com sucesso. Por favor, faça login.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link href="/login" passHref>
            <Button className="w-full">Ir para Login</Button>
          </Link>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Criar Conta</CardTitle>
        <CardDescription>
          Preencha os campos abaixo para criar sua conta
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleSignUp} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Nome
            </label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome completo"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu.email@exemplo.com"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Senha
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Sua senha"
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Criando conta...' : 'Criar Conta'}
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <div className="text-sm">
          Já tem uma conta?{' '}
          <Link href="/login" className="text-blue-600 hover:underline">
            Faça login
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

