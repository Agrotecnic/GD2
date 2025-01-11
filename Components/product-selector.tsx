import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Product {
  id: string;
  nome: string;
  marca: string;
  categoria: string;
}

interface ProductSelectorProps {
  products: Product[];
  selectedProduct: string;
  onSelectProduct: (productId: string) => void;
  className?: string;
}

export function ProductSelector({ products, selectedProduct, onSelectProduct, className }: ProductSelectorProps) {
  return (
    <Select value={selectedProduct} onValueChange={onSelectProduct}>
      <SelectTrigger className="min-h-0 h-7 px-2 text-[9px] print:h-6 print:border-gray-400 print:bg-white">
        <SelectValue placeholder="Selecione um produto" className="print:text-gray-500" />
      </SelectTrigger>
      <SelectContent>
        {products.map((product) => (
          <SelectItem 
            key={product.id} 
            value={product.id} 
            className="text-[9px] print:text-[8px]"
          >
            {product.nome} - {product.marca}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

