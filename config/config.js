require("dotenv").config();

const config = {
  sandboxSecretId: process.env.SANDBOX_SECRET_ID || "",
  sandboxSecretPassword: process.env.SANDBOX_SECRET_PASSWORD || "",
  sandboxEnvironment: process.env.SANDBOX_ENVIRONMENT || "",
  developmentSecretId: process.env.DEVELOPMENT_SECRET_ID || "",
  developmentSecretPassword: process.env.DEVELOPMENT_SECRET_PASSWORD || "",
  developmentEnvironment: process.env.DEVELOPMENT_ENVIRONMENT || "",
};

module.exports = { config };
