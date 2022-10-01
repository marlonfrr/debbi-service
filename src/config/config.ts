require('dotenv').config();

export const config = {
  sandboxSecretId: process.env.SANDBOX_SECRET_ID || '',
  sandboxSecretPassword: process.env.SANDBOX_SECRET_PASSWORD || '',
  sandboxEnvironment: process.env.SANDBOX_ENVIRONMENT || 'sandbox',
  developmentSecretId: process.env.DEVELOPMENT_SECRET_ID || '',
  developmentSecretPassword: process.env.DEVELOPMENT_SECRET_PASSWORD || '',
  developmentEnvironment: process.env.DEVELOPMENT_ENVIRONMENT || '',
  currentEnvironment: process.env.CURRENT_ENVIRONMENT || 'sandbox',
  JWT_KEY: process.env.JWT_KEY,
};
