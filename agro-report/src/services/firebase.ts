import { User, UserRole } from '../types';

const mockUser: User = {
  id: '1',
  name: 'Deyvid',
  email: 'deyvidrb@icloud.com',
  role: 'vendedor' as UserRole,
  regional: 'Sul',
  businessUnit: 'Agro',
  permissions: {
    role: 'vendedor' as UserRole,
    canViewAllRegions: false,
    canViewAllProducts: false,
    canManageUsers: false,
  }
};

export const signIn = async (email: string, password: string): Promise<User> => {
  console.log('Tentando login com:', email);

  await new Promise(resolve => setTimeout(resolve, 1000));

  if (email === 'deyvidrb@icloud.com' && password === '08Agrobueno') {
    console.log('Login bem-sucedido, retornando usuário:', mockUser);
    return { ...mockUser };  // Retorna uma cópia do mockUser
  } else {
    console.log('Falha no login: Credenciais inválidas');
    throw new Error('Credenciais inválidas');
  }
};

export const getCurrentUser = async (): Promise<User> => {
  console.log('Obtendo usuário atual (simulado)');

  await new Promise(resolve => setTimeout(resolve, 500));

  if (Math.random() > 0.1) {  // 90% chance de sucesso
    console.log('Retornando usuário mockado:', mockUser);
    return { ...mockUser };  // Retorna uma cópia do mockUser
  } else {
    console.log('Simulando falha ao obter usuário');
    throw new Error('Falha ao obter usuário');
  }
};

export const signUp = async (name: string, email: string, password: string): Promise<void> => {
  console.log('Criando conta para:', name, email);

  await new Promise(resolve => setTimeout(resolve, 1000));

  if (email === 'deyvidrb@icloud.com') {
    throw new Error('Este email já está em uso');
  }

  console.log('Conta criada com sucesso');
};

export const resetPassword = async (email: string): Promise<void> => {
  console.log('Enviando email de reset de senha para:', email);

  await new Promise(resolve => setTimeout(resolve, 1000));

  if (email !== 'deyvidrb@icloud.com') {
    throw new Error('Email não encontrado');
  }

  console.log('Email de reset de senha enviado com sucesso');
};

