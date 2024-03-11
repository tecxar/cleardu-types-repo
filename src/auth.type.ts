 interface TokenData {
  token: string;
  expiresIn: number;
}

 interface Login {
  username: string;
  password: string;
}

 enum SlugType {
  admin = 'admin',
  techLead = 'tech_lead',
  supervisor = 'supervisor',
  authorizationOfficer = 'authorization_officer',
  agent = 'agent',
}

export { TokenData, Login, SlugType }