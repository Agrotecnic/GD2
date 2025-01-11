import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Simulando dados que viriam do banco de dados
const dashboardData = {
  areasAtivas: 15,
  statusAreas: {
    emAcompanhamento: 8,
    aImplantar: 5,
    finalizados: 2,
  },
  metricas: {
    potencialArea: 1000000,
    hectaresTotal: 500,
    mediaHectare: 2000,
    realizacaoPotencial: 75,
  },
  historicoAreas: [
    { id: "1", data: new Date("2023-05-01"), status: "Em acompanhamento", produtos: ["Produto A", "Produto B"] },
    { id: "2", data: new Date("2023-04-15"), status: "Finalizado", produtos: ["Produto C"] },
    { id: "3", data: new Date("2023-05-10"), status: "A implantar", produtos: ["Produto D"] },
  ],
}

export function DashboardPersonal() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Dashboard Personal</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Áreas Ativas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.areasAtivas}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hectares Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.metricas.hectaresTotal}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Média por Hectare</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {dashboardData.metricas.mediaHectare.toLocaleString()}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Realização do Potencial</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.metricas.realizacaoPotencial}%</div>
            <Progress value={dashboardData.metricas.realizacaoPotencial} className="mt-2" />
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Status das Áreas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Em Acompanhamento</span>
              <span className="font-bold">{dashboardData.statusAreas.emAcompanhamento}</span>
            </div>
            <Progress value={(dashboardData.statusAreas.emAcompanhamento / dashboardData.areasAtivas) * 100} className="h-2" />
            
            <div className="flex justify-between items-center">
              <span>A Implantar</span>
              <span className="font-bold">{dashboardData.statusAreas.aImplantar}</span>
            </div>
            <Progress value={(dashboardData.statusAreas.aImplantar / dashboardData.areasAtivas) * 100} className="h-2" />
            
            <div className="flex justify-between items-center">
              <span>Finalizados</span>
              <span className="font-bold">{dashboardData.statusAreas.finalizados}</span>
            </div>
            <Progress value={(dashboardData.statusAreas.finalizados / dashboardData.areasAtivas) * 100} className="h-2" />
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Áreas</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Produtos</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dashboardData.historicoAreas.map((area) => (
                <TableRow key={area.id}>
                  <TableCell>{area.id}</TableCell>
                  <TableCell>{area.data.toLocaleDateString()}</TableCell>
                  <TableCell>{area.status}</TableCell>
                  <TableCell>{area.produtos.join(", ")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

