import { LinkService } from '@/services/link.service';
import { RequestHandler } from 'express';

export class LinkController {
  private service: LinkService;

  constructor() {
    this.service = new LinkService();
  }

  getLink: RequestHandler = async (req, res): Promise<void>  => {
    const { shortUrl } = req.params;
    
    const link = await this.service.getLink(shortUrl);
    if(link) {
      res.status(301).redirect(link.originUrl);
    } else {
      res.status(404).send('Link not found');
    }
  };
  createLink: RequestHandler = async (req, res): Promise<void> => {
    const originUrl = req.body;
    const link = await this.service.createLink(originUrl);
    res.send(link);
  };
}
