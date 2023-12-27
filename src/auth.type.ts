import { User } from './user.type';

export interface TokenData {
  token: string;
  expiresIn: number;
}

export interface Login {
  username: string;
  password: string;
}

export enum SlugType {
  admin = 'admin',
  techLead = 'tech_lead',
  supervisor = 'supervisor',
  authorizationOfficer = 'authorization_officer',
  agent = 'agent',
}
