import { LinkController } from '@/controllers/link.controller';
import { Route } from '@/interfaces/Route.interface';
import { Router } from 'express';

export class LinkRoute implements Route {
  public path = '/links';
  public router = Router();

  private controller: LinkController;

  constructor() {
    this.controller = new LinkController();
    this.init();
  }

  private init() {
    this.router.get('/:shortUrl', this.controller.getLink);
    this.router.post('/', this.controller.createLink);
  }
}
