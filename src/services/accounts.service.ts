import { BelvoGateway } from '../gateway/belvo';
import { cleanEmpty } from '../utils/filter-response';

const belvo = new BelvoGateway();

export class AccountsService {
  async getUserAccounts(link) {
    const accountsData = await belvo.getUserAccounts(link);

    const accounts = cleanEmpty(accountsData);
    const response = {
      msg: `You have ${accountsData.length} products currently active with institution`,
      accounts,
    };
    return response;
  }
}
