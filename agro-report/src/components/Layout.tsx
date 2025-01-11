import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  console.log("Layout está renderizando");
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-600 text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">AgroReport</h1>
        </div>
      </header>
      <main className="container mx-auto mt-8 p-4">
        {console.log("Renderizando children do Layout")}
        {children}
      </main>
    </div>
  );
};

