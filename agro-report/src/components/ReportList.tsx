import React from 'react';
import { User } from '../types';

interface ReportListProps {
  user: User;
}

export const ReportList: React.FC<ReportListProps> = ({ user }) => {
  console.log("Renderizando ReportList para o usuário:", user);

  return (
    <div className="report-list mt-8">
      <h2 className="text-xl font-bold mb-4">Relatórios</h2>
      <p>A lista de relatórios será exibida aqui.</p>
    </div>
  );
};

