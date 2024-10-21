import { IUrl } from "@/interfaces/url.interface";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Link implements IUrl {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  shortUrl!: string;
  @Column({ nullable: true })
  originUrl!: string;
}