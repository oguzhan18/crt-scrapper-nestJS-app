import { Injectable } from '@nestjs/common';
import { scrapeData } from 'crt-scrapper';
@Injectable()
export class AppService {
  async getData(url: string, targetClass: string) {
    return await scrapeData(url, targetClass);
  }
}
