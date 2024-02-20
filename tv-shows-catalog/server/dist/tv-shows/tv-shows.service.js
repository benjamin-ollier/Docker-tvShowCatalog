"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TvShowsService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const axios_2 = require("axios");
const rxjs_1 = require("rxjs");
const tv_show_summary_entity_1 = require("./entities/tv-show-summary.entity");
const tv_show_entity_1 = require("./entities/tv-show.entity");
let TvShowsService = class TvShowsService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async findAll() {
        const { data: tvShows } = await (0, rxjs_1.firstValueFrom)(this.httpService.get('/shows'));
        return tvShows.map((tvShow) => new tv_show_summary_entity_1.TvShowSummary(tvShow));
    }
    async findOne(id) {
        try {
            const { data: tvShow } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`/shows/${id}`));
            return new tv_show_entity_1.TvShow(tvShow);
        }
        catch (e) {
            if ((0, axios_2.isAxiosError)(e) && e.response.status === 404) {
                throw new common_1.NotFoundException(`TV show with ID "${id}" does not exist.`);
            }
            throw e;
        }
    }
};
exports.TvShowsService = TvShowsService;
exports.TvShowsService = TvShowsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], TvShowsService);
//# sourceMappingURL=tv-shows.service.js.map