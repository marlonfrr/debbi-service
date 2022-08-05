const BelvoGateway = require("../gateway/belvo");

const belvo = new BelvoGateway();

class BalancesService {
  getBankBalance() {
    const balance = belvo.getUserBalance();
    return balance;
  }
}

module.exports = BalancesService;
