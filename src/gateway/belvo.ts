const { config } = require('../config/config');
var belvo = require('belvo').default;

var client = new belvo(
  config.currentEnvironment == 'sandbox'
    ? config.sandboxSecretId
    : config.developmentSecretId,
  config.currentEnvironment == 'sandbox'
    ? config.sandboxSecretPassword
    : config.developmentSecretPassword,
  config.currentEnvironment == 'sandbox'
    ? config.sandboxEnvironment
    : config.developmentEnvironment
);

export class BelvoGateway {
  getUserLink() {
    return config.currentEnvironment == 'sandbox'
      ? '2a509c64-d72a-4cdf-ba91-9a1b66084e33'
      : '307a3179-75a3-4ba2-bc9e-a75543aec506';
  }

  async getAccessToken() {
    try {
      await client.connect();
      const token = await client.widgetToken.create();
      console.log(token);
      return token.access;
    } catch (e) {
      console.log(e);
    }
  }

  async getUserAccounts(link) {
    link = this.getUserLink();
    try {
      await client.connect();
      const accounts = await client.accounts.retrieve(link);
      return accounts;
    } catch (e) {
      console.log(e);
    }
  }

  async getInstitutions() {
    try {
      await client.connect();
      const institutions = await client.institutions.list({
        filters: { country_code: 'CO' },
      });
      console.log('institutions' + institutions);
      return institutions.find((el) => el.name.includes('bancolombia'));
    } catch (e) {
      console.log(e);
    }
  }

  async getUserTransactions(link, dateFrom, dateTo) {
    link = this.getUserLink();
    try {
      await client.connect();
      const transactions = await client.transactions.retrieve(
        link,
        dateFrom,
        dateTo
      );
      console.log('transactions' + transactions);
      return transactions;
    } catch (e) {
      console.log(e);
    }
  }
}
