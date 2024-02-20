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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TvShowsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const find_one_tv_show_params_dto_1 = require("./dto/find-one-tv-show-params.dto");
const tv_show_summary_entity_1 = require("./entities/tv-show-summary.entity");
const tv_show_entity_1 = require("./entities/tv-show.entity");
const tv_shows_service_1 = require("./tv-shows.service");
let TvShowsController = class TvShowsController {
    constructor(tvShowsService) {
        this.tvShowsService = tvShowsService;
    }
    findAll() {
        return this.tvShowsService.findAll();
    }
    findOne({ id }) {
        return this.tvShowsService.findOne(+id);
    }
};
exports.TvShowsController = TvShowsController;
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'List of TV shows.', type: [tv_show_summary_entity_1.TvShowSummary] }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error.' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TvShowsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Details about a TV show.', type: tv_show_entity_1.TvShow }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'TV show does not exist.' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error.' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_one_tv_show_params_dto_1.FindOneTvShowParams]),
    __metadata("design:returntype", void 0)
], TvShowsController.prototype, "findOne", null);
exports.TvShowsController = TvShowsController = __decorate([
    (0, swagger_1.ApiTags)('TV Shows'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Controller)('tv-shows'),
    __metadata("design:paramtypes", [tv_shows_service_1.TvShowsService])
], TvShowsController);
//# sourceMappingURL=tv-shows.controller.js.map