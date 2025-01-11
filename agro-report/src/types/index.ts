export type UserRole = 'vendedor' | 'gerente_comercial' | 'gestor_regional' | 'diretor' | 'gerente_produto';

export interface UserPermissions {
  role: UserRole;
  regional?: string;
  businessUnit?: string;
  canViewAllRegions: boolean;
  canViewAllProducts: boolean;
  canManageUsers: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  regional: string;
  businessUnit: string;
  permissions: UserPermissions;
}

