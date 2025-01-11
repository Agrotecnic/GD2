import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Copy, Eye } from 'lucide-react'

interface Report {
  id: string;
  date: string;
  productName: string;
  area: number;
  status: 'Em acompanhamento' | 'Finalizado' | 'A implantar';
}

interface ReportListProps {
  reports?: Report[];
  onViewReport: (id: string) => void;
  onDuplicateReport: (id: string) => void;
}

export function ReportList({ reports = [], onViewReport, onDuplicateReport }: ReportListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Histórico de Relatórios</CardTitle>
      </CardHeader>
      <CardContent>
        {reports.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Produto</TableHead>
                <TableHead>Área (ha)</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell>{report.date}</TableCell>
                  <TableCell>{report.productName}</TableCell>
                  <TableCell>{report.area}</TableCell>
                  <TableCell>{report.status}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon" onClick={() => onViewReport(report.id)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => onDuplicateReport(report.id)}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p className="text-center text-gray-500">Nenhum relatório disponível.</p>
        )}
      </CardContent>
    </Card>
  )
}

