import { FindOneTvShowParams } from './dto/find-one-tv-show-params.dto';
import { TvShowSummary } from './entities/tv-show-summary.entity';
import { TvShow } from './entities/tv-show.entity';
import { TvShowsService } from './tv-shows.service';
export declare class TvShowsController {
    private readonly tvShowsService;
    constructor(tvShowsService: TvShowsService);
    findAll(): Promise<TvShowSummary[]>;
    findOne({ id }: FindOneTvShowParams): Promise<TvShow>;
}
