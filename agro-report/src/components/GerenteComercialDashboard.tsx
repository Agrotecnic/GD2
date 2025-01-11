import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { User } from '../types'
import { DateRangeFilter } from './DateRangeFilter'
import { DateRange } from "react-day-picker"

const initialPerformanceData = [
  { vendedor: 'João', totalArea: 250, eficienciaMedia: 85 },
  { vendedor: 'Maria', totalArea: 300, eficienciaMedia: 78 },
  { vendedor: 'Pedro', totalArea: 200, eficienciaMedia: 90 },
  { vendedor: 'Ana', totalArea: 280, eficienciaMedia: 82 },
];

interface GerenteComercialDashboardProps {
  user: User;
}

export function GerenteComercialDashboard({ user }: GerenteComercialDashboardProps) {
  const [performanceData, setPerformanceData] = useState(initialPerformanceData);
  const [totalAreaRegiao, setTotalAreaRegiao] = useState(1030);
  const [vendedoresAtivos, setVendedoresAtivos] = useState(4);
  const [eficienciaMediaRegional, setEficienciaMediaRegional] = useState(83);

  const handleFilterChange = (dateRange: DateRange | undefined) => {
    if (dateRange?.from && dateRange?.to) {
      setPerformanceData(performanceData.map(item => ({
        ...item,
        totalArea: item.totalArea + Math.floor(Math.random() * 50) - 25,
        eficienciaMedia: item.eficienciaMedia + Math.floor(Math.random() * 10) - 5
      })));
      setTotalAreaRegiao(totalAreaRegiao + Math.floor(Math.random() * 100) - 50);
      setVendedoresAtivos(vendedoresAtivos + Math.floor(Math.random() * 2) - 1);
      setEficienciaMediaRegional(eficienciaMediaRegional + Math.floor(Math.random() * 6) - 3);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard do Gerente Comercial</h1>
      <p className="text-xl">Bem-vindo, {user.name}!</p>
      
      <DateRangeFilter onFilterChange={handleFilterChange} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total de Áreas na Região</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{totalAreaRegiao} ha</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Vendedores Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{vendedoresAtivos}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Eficiência Média Regional</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{eficienciaMediaRegional}%</p>
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
    </div>
  )
}

