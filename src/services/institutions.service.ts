import { BelvoGateway } from '../gateway/belvo';

const belvo = new BelvoGateway();

export class InstitutionsService {
  async getInstitutions() {
    const institutions = await belvo.getInstitutions();
    return institutions;
  }
}
