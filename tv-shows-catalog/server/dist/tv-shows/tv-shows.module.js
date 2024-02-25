"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TvShowsModule = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const tv_shows_controller_1 = require("./tv-shows.controller");
const tv_shows_service_1 = require("./tv-shows.service");
let TvShowsModule = class TvShowsModule {
};
exports.TvShowsModule = TvShowsModule;
exports.TvShowsModule = TvShowsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule.register({
                baseURL: 'https://api.tvmaze.com',
                timeout: 10000,
            }),
        ],
        controllers: [tv_shows_controller_1.TvShowsController],
        providers: [tv_shows_service_1.TvShowsService],
    })
], TvShowsModule);
//# sourceMappingURL=tv-shows.module.js.map