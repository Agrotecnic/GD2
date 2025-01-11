import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ReportList } from './ReportList'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { User } from '../types'

const performanceData = [
  { produto: 'Produto A', eficiencia: 85 },
  { produto: 'Produto B', eficiencia: 75 },
  { produto: 'Produto C', eficiencia: 90 },
  { produto: 'Produto D', eficiencia: 70 },
];

const mockReports = [
  { id: '1', date: '2023-05-15', productName: 'Produto A', area: 50, status: 'Em acompanhamento' },
  { id: '2', date: '2023-05-10', productName: 'Produto B', area: 30, status: 'Finalizado' },
  { id: '3', date: '2023-05-05', productName: 'Produto C', area: 40, status: 'A implantar' },
];

interface VendedorDashboardProps {
  user: User;
}

export function VendedorDashboard({ user }: VendedorDashboardProps) {
  const handleViewReport = (id: string) => {
    console.log(`Visualizando relatório ${id}`);
  };

  const handleDuplicateReport = (id: string) => {
    console.log(`Duplicando relatório ${id}`);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard do Vendedor</h1>
      <p>Bem-vindo, {user.name}!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total de Áreas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">120 ha</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Relatórios Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">15</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Eficiência Média</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">80%</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Performance por Produto</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="produto" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="eficiencia" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <ReportList 
        reports={mockReports} 
        onViewReport={handleViewReport}
        onDuplicateReport={handleDuplicateReport}
      />

      <Button>Criar Novo Relatório</Button>
    </div>
  )
}

