const BelvoGateway = require("../gateway/belvo");

const belvo = new BelvoGateway();

class InstitutionsService {
  async getInstitutions() {
    const institutions = await belvo.getInstitutions();
    return institutions;
  }
}

module.exports = InstitutionsService;
