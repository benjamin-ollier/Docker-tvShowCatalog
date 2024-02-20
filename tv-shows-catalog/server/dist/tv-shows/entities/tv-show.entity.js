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
exports.TvShow = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const slugify_1 = require("slugify");
class TvShow {
    constructor(partial) {
        Object.assign(this, partial);
    }
    get slug() {
        return (0, slugify_1.default)(this.name, { lower: true, strict: true });
    }
}
exports.TvShow = TvShow;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The ID of the TV show',
        example: 1,
        minimum: 1,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], TvShow.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the TV show',
        example: 'Under the Dome',
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TvShow.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The slug of the TV show',
        example: 'under-the-dome',
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], TvShow.prototype, "slug", null);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The genres of the TV show',
        example: ['Drama', 'Science-Fiction', 'Thriller'],
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], TvShow.prototype, "genres", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "The average watchers' rating of the TV show",
        example: 4.5,
        minimum: 1,
        maximum: 10,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], TvShow.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The available images for TV shows. Can be in "medium" or "original" format.',
        example: 'https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], TvShow.prototype, "image", void 0);
//# sourceMappingURL=tv-show.entity.js.map