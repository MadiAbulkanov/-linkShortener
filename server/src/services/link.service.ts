
import { IUrl } from '@/interfaces/url.interface';
import { LinkRepository } from '@/repositories/link.repository';

export class LinkService {
  private repository: LinkRepository;

  constructor() {
    this.repository = new LinkRepository();
  }

  getLink = async (shortUrl: string): Promise<IUrl | null> => {
    return await this.repository.getLink(shortUrl);
  };

  createLink = async (originUrl: string): Promise<IUrl> => {
    return await this.repository.createLink(originUrl);
  };
}