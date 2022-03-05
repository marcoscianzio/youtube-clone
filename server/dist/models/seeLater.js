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
exports.SeeLater = void 0;
const type_graphql_1 = require("type-graphql");
const user_1 = require("./user");
const video_1 = require("./video");
let SeeLater = class SeeLater {
};
__decorate([
    (0, type_graphql_1.Field)(() => video_1.Video),
    __metadata("design:type", video_1.Video)
], SeeLater.prototype, "video", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => user_1.User),
    __metadata("design:type", user_1.User)
], SeeLater.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], SeeLater.prototype, "videoId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], SeeLater.prototype, "userId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], SeeLater.prototype, "addedAt", void 0);
SeeLater = __decorate([
    (0, type_graphql_1.ObjectType)()
], SeeLater);
exports.SeeLater = SeeLater;
//# sourceMappingURL=seeLater.js.map