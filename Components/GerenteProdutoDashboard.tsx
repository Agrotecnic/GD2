import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ReportList } from './ReportList'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { User } from '../types'

const performanceData = [
  { produto: 'Produto A', areaTotal: 3000, eficienciaMedia: 85 },
  { produto: 'Produto B', areaTotal: 2500, eficienciaMedia: 78 },
  { produto: 'Produto C', areaTotal: 3500, eficienciaMedia: 90 },
  { produto: 'Produto D', areaTotal: 2800, eficienciaMedia: 82 },
];

const mockReports = [
  { id: '1', date: '2023-05-15', productName: 'Produto A', area: 500, status: 'Em acompanhamento' },
  { id: '2', date: '2023-05-10', productName: 'Produto B', area: 300, status: 'Finalizado' },
  { id: '3', date: '2023-05-05', productName: 'Produto C', area: 400, status: 'A implantar' },
];

interface GerenteProdutoDashboardProps {
  user: User;
}

export function GerenteProdutoDashboard({ user }: GerenteProdutoDashboardProps) {
  const handleViewReport = (id: string) => {
    console.log(`Visualizando relatório ${id}`);
  };

  const handleDuplicateReport = (id: string) => {
    console.log(`Duplicando relatório ${id}`);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard do Gerente de Produto</h1>
      <p>Bem-vindo, {user.name}!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total de Áreas por Produtos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">11800 ha</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Produtos Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">4</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Eficiência Média dos Produtos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">84%</p>
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
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="areaTotal" fill="#8884d8" name="Área Total (ha)" />
              <Bar yAxisId="right" dataKey="eficienciaMedia" fill="#82ca9d" name="Eficiência Média (%)" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <ReportList 
        reports={mockReports} 
        onViewReport={handleViewReport}
        onDuplicateReport={handleDuplicateReport}
      />
    </div>
  )
}

