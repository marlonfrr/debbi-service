const BelvoGateway = require("../gateway/belvo");

const belvo = new BelvoGateway();

class LinksService {
  async getAccessToken() {
    const token = await belvo.getAccessToken();
    return token;
  }
}

module.exports = LinksService;
