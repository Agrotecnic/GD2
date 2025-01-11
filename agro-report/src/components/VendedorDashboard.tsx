import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { User } from '../types'
import { DateRangeFilter } from './DateRangeFilter'
import { DateRange } from "react-day-picker"

const initialPerformanceData = [
  { produto: 'Produto A', eficiencia: 85 },
  { produto: 'Produto B', eficiencia: 75 },
  { produto: 'Produto C', eficiencia: 90 },
  { produto: 'Produto D', eficiencia: 70 },
];

interface VendedorDashboardProps {
  user: User;
}

export function VendedorDashboard({ user }: VendedorDashboardProps) {
  const [performanceData, setPerformanceData] = useState(initialPerformanceData);
  const [totalArea, setTotalArea] = useState(120);
  const [clientesAtivos, setClientesAtivos] = useState(15);
  const [eficienciaMedia, setEficienciaMedia] = useState(80);

  const handleFilterChange = (dateRange: DateRange | undefined) => {
    // Aqui você implementaria a lógica para buscar dados do backend com base no intervalo de datas
    // Por enquanto, vamos apenas simular uma mudança nos dados
    if (dateRange?.from && dateRange?.to) {
      setPerformanceData(performanceData.map(item => ({
        ...item,
        eficiencia: item.eficiencia + Math.floor(Math.random() * 10) - 5
      })));
      setTotalArea(totalArea + Math.floor(Math.random() * 20) - 10);
      setClientesAtivos(clientesAtivos + Math.floor(Math.random() * 4) - 2);
      setEficienciaMedia(eficienciaMedia + Math.floor(Math.random() * 6) - 3);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard do Vendedor</h1>
      <p className="text-xl">Bem-vindo, {user.name}!</p>
      
      <DateRangeFilter onFilterChange={handleFilterChange} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total de Áreas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{totalArea} ha</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Clientes Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{clientesAtivos}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Eficiência Média</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{eficienciaMedia}%</p>
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
    </div>
  )
}

