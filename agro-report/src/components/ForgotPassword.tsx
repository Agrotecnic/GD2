'use client'

import React, { useState } from 'react';
import { resetPassword } from '../services/firebase';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from 'next/link'

export const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await resetPassword(email);
      setSuccess(true);
    } catch (error) {
      console.error("Password reset error:", error);
      setError(error instanceof Error ? error.message : 'Erro ao resetar a senha');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Email Enviado</CardTitle>
          <CardDescription>
            Um email com instruções para resetar sua senha foi enviado para {email}.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link href="/login" passHref>
            <Button className="w-full">Voltar para Login</Button>
          </Link>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Esqueceu a Senha</CardTitle>
        <CardDescription>
          Digite seu email para receber instruções de reset de senha
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleResetPassword} className="space-y-4">
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
          <Button 
            type="submit" 
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Enviar Email de Reset'}
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <div className="text-sm">
          Lembrou sua senha?{' '}
          <Link href="/login" className="text-blue-600 hover:underline">
            Voltar para Login
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

