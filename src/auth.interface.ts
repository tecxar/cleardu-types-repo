import session from 'express-session';
import { User } from './user.interface';

export interface TokenData {
  token: string;
  expiresIn: number;
}

export interface Login {
  username: string;
  password: string;
}

export interface session extends session.Session {
  user: User;
}

export enum SlugType {
  admin = 'admin',
  techLead = 'tech_lead',
  supervisor = 'supervisor',
  authorizationOfficer = 'authorization_officer',
  agent = 'agent',
}
