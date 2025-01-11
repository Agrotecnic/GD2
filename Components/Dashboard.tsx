import React from 'react'
import { VendedorDashboard } from './VendedorDashboard'
import { GerenteComercialDashboard } from './GerenteComercialDashboard'
import { DiretorDashboard } from './DiretorDashboard'
import { GerenteProdutoDashboard } from './GerenteProdutoDashboard'
import { useAppContext } from '../App'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface DashboardProps {
  onLogout: () => void;
}

export function Dashboard({ onLogout }: DashboardProps) {
  const { user, error } = useAppContext();

  console.log('Dashboard renderizando. Usuário:', user);

  if (error) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Erro</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-500">{error}</p>
          <Button onClick={onLogout} className="mt-4">Voltar para Login</Button>
        </CardContent>
      </Card>
    );
  }

  if (!user) {
    console.error('Dashboard: Usuário não definido');
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Erro: Usuário não definido</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-500">Não foi possível carregar as informações do usuário. Por favor, tente fazer login novamente.</p>
          <Button onClick={onLogout} className="mt-4">Voltar para Login</Button>
        </CardContent>
      </Card>
    );
  }

  if (!user.role) {
    console.error('Dashboard: Papel do usuário não definido:', user);
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Erro: Papel do usuário não definido</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-500">Não foi possível determinar o papel do usuário. Por favor, contate o suporte técnico.</p>
          <Button onClick={onLogout} className="mt-4">Voltar para Login</Button>
        </CardContent>
      </Card>
    );
  }

  switch (user.role) {
    case 'vendedor':
      return <VendedorDashboard user={user} />;
    case 'gerente_comercial':
    case 'gestor_regional':
      return <GerenteComercialDashboard user={user} />;
    case 'diretor':
      return <DiretorDashboard user={user} />;
    case 'gerente_produto':
      return <GerenteProdutoDashboard user={user} />;
    default:
      console.error('Papel de usuário inválido:', user.role);
      return (
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Erro: Papel de usuário não reconhecido</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-500">O papel de usuário "{user.role}" não é válido. Por favor, contate o suporte técnico.</p>
            <Button onClick={onLogout} className="mt-4">Voltar para Login</Button>
          </CardContent>
        </Card>
      );
  }
}

