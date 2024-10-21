import { Expose } from 'class-transformer';

export class LinkDto {
  @Expose()
  shortUrl!: string;
  @Expose()
  originUrl!: string;
}
