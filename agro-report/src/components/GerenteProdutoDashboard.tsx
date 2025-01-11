import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { DateRangeFilter } from './DateRangeFilter'
import { DateRange } from "react-day-picker"

interface User {
  name: string;
  role: string;
}

interface GerenteProdutoDashboardProps {
  user: User;
}

const initialPerformanceData = [
  { produto: 'Produto A', areaTotal: 3000, eficienciaMedia: 85 },
  { produto: 'Produto B', areaTotal: 2500, eficienciaMedia: 78 },
  { produto: 'Produto C', areaTotal: 3500, eficienciaMedia: 90 },
  { produto: 'Produto D', areaTotal: 2800, eficienciaMedia: 82 },
];

export function GerenteProdutoDashboard({ user }: GerenteProdutoDashboardProps) {
  console.log('GerenteProdutoDashboard rendering for user:', user);
  const [performanceData, setPerformanceData] = useState(initialPerformanceData);

  const handleFilterChange = (dateRange: DateRange | undefined) => {
    console.log('Filter applied:', dateRange);
    // Implement filter logic here
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard do Gerente de Produto</h1>
      <p className="text-xl">Bem-vindo, {user.name}!</p>
      
      <DateRangeFilter onFilterChange={handleFilterChange} />
      
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
    </div>
  )
}

