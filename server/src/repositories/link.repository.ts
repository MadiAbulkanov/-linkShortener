import { appDataSource } from "@/config/dataSource";
import { Link } from "@/entities/link.entity";
import { IUrl } from "@/interfaces/url.interface";
import { randomUUID } from "crypto";
import { Repository } from "typeorm";

export class LinkRepository extends Repository<Link> {
    constructor() {
      super(Link, appDataSource.createEntityManager());
    }

    async getLink(shortUrl: string): Promise<Link | null> {
      return await this.findOne({ where: { shortUrl } });
    }
  
    async createLink(originUrl: string): Promise<IUrl> {
      const shortUrl = randomUUID().slice(0, 7);

      const existingLink = await this.getLink(shortUrl);
      if(existingLink) {
        return this.createLink(originUrl);
      }

      const link = new Link();
      link.originUrl = originUrl;
      link.shortUrl = shortUrl;
      await this.save(link);
      return link;
    }
};