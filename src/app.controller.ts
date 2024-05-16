import { Controller, Get, Query } from '@nestjs/common'; 
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly scrapeService: AppService) {}

    @Get()
    async getData(@Query('url') url: string, @Query('targetClass') targetClass: string) {
        if (!url || !targetClass) {
            return { error: 'URL ve hedef sınıf belirtilmelidir.' };
        }
        return await this.scrapeService.getData(url, targetClass);
    }
}
