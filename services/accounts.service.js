const BelvoGateway = require("../gateway/belvo");

const belvo = new BelvoGateway();

class AccountsService {
  async getUserAccounts() {
    const accounts = await belvo.getUserAccounts();
    return accounts;
  }
}

module.exports = AccountsService;
