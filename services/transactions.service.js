const BelvoGateway = require("../gateway/belvo");

const belvo = new BelvoGateway();

class TransactionsService {
  async getUserTransactions() {
    const transactions = await belvo.getUserTransactions();
    return transactions;
  }
}

module.exports = TransactionsService;
