'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export interface EvaluationData {
  id?: number;
  parameter: string;
  productValue: number;
  controlValue: number;
}

interface EvaluationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: EvaluationData) => void;
  productName: string;
  parameters: string[];
  editingEvaluation: EvaluationData | null;
}

export function EvaluationForm({ open, onOpenChange, onSubmit, productName, parameters, editingEvaluation }: EvaluationFormProps) {
  const [formData, setFormData] = useState<EvaluationData>({
    parameter: '',
    productValue: 0,
    controlValue: 0
  });

  useEffect(() => {
    if (editingEvaluation) {
      setFormData(editingEvaluation);
    } else {
      setFormData({
        parameter: '',
        productValue: 0,
        controlValue: 0
      });
    }
  }, [editingEvaluation]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{editingEvaluation ? 'Editar Avaliação' : 'Inserir Nova Avaliação'}</DialogTitle>
          <DialogDescription>
            {editingEvaluation ? 'Edite os dados da avaliação abaixo.' : 'Preencha os dados da nova avaliação abaixo.'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid w-full gap-2">
            <Label htmlFor="parameter">Parâmetro</Label>
            <Select
              value={formData.parameter}
              onValueChange={(value) => setFormData(prev => ({ ...prev, parameter: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o parâmetro" />
              </SelectTrigger>
              <SelectContent>
                {parameters.map((param) => (
                  <SelectItem key={param} value={param}>
                    {param}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full gap-2">
            <Label htmlFor="productValue">{productName || 'Produto'}</Label>
            <Input
              id="productValue"
              type="number"
              step="0.1"
              value={formData.productValue}
              onChange={(e) => setFormData(prev => ({ ...prev, productValue: parseFloat(e.target.value) }))}
              required
            />
          </div>
          <div className="grid w-full gap-2">
            <Label htmlFor="controlValue">Testemunha (Controle)</Label>
            <Input
              id="controlValue"
              type="number"
              step="0.1"
              value={formData.controlValue}
              onChange={(e) => setFormData(prev => ({ ...prev, controlValue: parseFloat(e.target.value) }))}
              required
            />
          </div>
          <Button type="submit" className="w-full">{editingEvaluation ? 'Atualizar Avaliação' : 'Adicionar Avaliação'}</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

