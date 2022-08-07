const { config } = require("../config/config");
var belvo = require("belvo").default;

var client = new belvo(
  config.sandboxSecretId,
  config.sandboxSecretPassword,
  config.sandboxEnvironment
);

class BelvoGateway {
  getUserLink() {
    return "a6598df99-8bdb-4156-9da1-fa8a06ba30f0";
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

  async getUserAccounts() {
    try {
      await client.connect();
      const accounts = await client.accounts.retrieve(this.getUserLink());
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
}

module.exports = BelvoGateway;
