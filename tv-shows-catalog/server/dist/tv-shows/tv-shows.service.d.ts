import { HttpService } from '@nestjs/axios';
import { TvShowSummary } from './entities/tv-show-summary.entity';
import { TvShow } from './entities/tv-show.entity';
export declare class TvShowsService {
    private readonly httpService;
    constructor(httpService: HttpService);
    findAll(): Promise<TvShowSummary[]>;
    findOne(id: number): Promise<TvShow>;
}
