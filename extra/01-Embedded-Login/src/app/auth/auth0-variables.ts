interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  
  clientID: '6MQUpb0rrQJYSjdFmlZm4pi4IfKd1f7Y',
  domain: 'chains.eu.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
  // clientID: 'q9h6uxP3YMBMMNjI6DFjCX6eNODtJxjl',
  // domain: 'chains.eu.auth0.com',
  // callbackURL: 'http://localhost:4200/callback'
};
