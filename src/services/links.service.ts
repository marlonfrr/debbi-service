import { BelvoGateway } from '../gateway/belvo';
import { AppDataSource } from '../data-source';
import { Link } from '../entity';
import { requireAuth } from '../middlewares/require-auth';

const belvo = new BelvoGateway();
const linkRepository = AppDataSource.getRepository(Link);

export class LinksService {
  async getAccessToken() {
    const token = await belvo.getAccessToken();
    return token;
  }

  async saveUserLink(userid, link) {
    const newLink = await linkRepository.create({
      link_id: link.id,
      institution: link.institution,
      user_id: userid,
    });
    await linkRepository.save(newLink);
  }
}
