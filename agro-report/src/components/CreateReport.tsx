'use client'

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePickerWithRange } from "@/components/ui/date-range-picker"

export const CreateReport: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [productType, setProductType] = useState('');
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date } | undefined>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Aqui você implementaria a lógica para salvar o relatório
    // Por enquanto, vamos apenas simular um atraso e marcar como sucesso
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(true);
    } catch (error) {
      setError('Ocorreu um erro ao criar o relatório. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Relatório Criado</CardTitle>
          <CardDescription>
            Seu relatório foi criado com sucesso.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button onClick={() => setSuccess(false)} className="w-full">Criar Outro Relatório</Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Criar Novo Relatório</CardTitle>
        <CardDescription>
          Preencha os campos abaixo para criar um novo relatório
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Título do Relatório
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Digite o título do relatório"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Descrição
            </label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descreva o relatório"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="productType" className="text-sm font-medium">
              Tipo de Produto
            </label>
            <Select value={productType} onValueChange={setProductType}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tipo de produto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fertilizante">Fertilizante</SelectItem>
                <SelectItem value="pesticida">Pesticida</SelectItem>
                <SelectItem value="semente">Semente</SelectItem>
                <SelectItem value="maquinario">Maquinário</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Período do Relatório
            </label>
            <DatePickerWithRange 
              value={dateRange} 
              onDateRangeChange={(range) => setDateRange(range)}
            />
          </div>
          <Button 
            type="submit" 
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Criando...' : 'Criar Relatório'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

