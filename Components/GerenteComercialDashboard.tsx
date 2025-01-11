import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ReportList } from './ReportList'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { User } from '../types'

const performanceData = [
  { vendedor: 'João', totalArea: 250, eficienciaMedia: 85 },
  { vendedor: 'Maria', totalArea: 300, eficienciaMedia: 78 },
  { vendedor: 'Pedro', totalArea: 200, eficienciaMedia: 90 },
  { vendedor: 'Ana', totalArea: 280, eficienciaMedia: 82 },
];

const mockReports = [
  { id: '1', date: '2023-05-15', productName: 'Produto A', area: 50, status: 'Em acompanhamento' },
  { id: '2', date: '2023-05-10', productName: 'Produto B', area: 30, status: 'Finalizado' },
  { id: '3', date: '2023-05-05', productName: 'Produto C', area: 40, status: 'A implantar' },
];

interface GerenteComercialDashboardProps {
  user: User;
}

export function GerenteComercialDashboard({ user }: GerenteComercialDashboardProps) {
  const handleViewReport = (id: string) => {
    console.log(`Visualizando relatório ${id}`);
  };

  const handleDuplicateReport = (id: string) => {
    console.log(`Duplicando relatório ${id}`);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard do Gerente Comercial</h1>
      <p>Bem-vindo, {user.name}!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total de Áreas na Região</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1030 ha</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Vendedores Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">4</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Eficiência Média Regional</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">83%</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Performance por Vendedor</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="vendedor" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="totalArea" fill="#8884d8" name="Área Total (ha)" />
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

