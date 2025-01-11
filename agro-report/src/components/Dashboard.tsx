import React from 'react';
import { VendedorDashboard } from './VendedorDashboard';
import { GerenteComercialDashboard } from './GerenteComercialDashboard';
import { DiretorDashboard } from './DiretorDashboard';
import { GerenteProdutoDashboard } from './GerenteProdutoDashboard';

interface User {
  name: string;
  role: string;
}

interface DashboardProps {
  user: User;
}

export function Dashboard({ user }: DashboardProps) {
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
      return <div>Erro: Papel de usuário desconhecido: {user.role}</div>;
  }
}

