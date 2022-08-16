const { config } = require("../config/config");
var belvo = require("belvo").default;

var client = new belvo(
  config.sandboxSecretId,
  config.sandboxSecretPassword,
  config.sandboxEnvironment
);

class BelvoGateway {
  getUserLink() {
    return "2a509c64-d72a-4cdf-ba91-9a1b66084e33";
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
      console.log("accounts" + accounts);
      return accounts;
    } catch (e) {
      console.log(e);
    }
  }

  async getInstitutions() {
    try {
      await client.connect();
      const institutions = await client.institutions.list({
        filters: { country_code: "CO" },
      });
      console.log("institutions" + institutions);
      return institutions.find((el) => el.name.includes("bancolombia"));
    } catch (e) {
      console.log(e);
    }
  }

  async getUserTransactions(link) {
    link = this.getUserLink();
    try {
      await client.connect();
      const transactions = await client.transactions.retrieve(link, '2022-08-12');
      console.log("transactions" + transactions);
      return transactions;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = BelvoGateway;
