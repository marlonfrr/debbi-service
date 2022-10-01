import { BelvoGateway } from '../gateway/belvo';

const belvo = new BelvoGateway();

export class TransactionsService {
  async getUserTransactions(link, dateFrom, dateTo) {
    const transactions = await belvo.getUserTransactions(
      link,
      dateFrom,
      dateTo
    );
    const response = {
      msg: `You have made ${transactions.length} transactions with institution`,
      transactions,
    };
    return response;
  }
}
