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
exports.Vote = void 0;
const type_graphql_1 = require("type-graphql");
const comment_1 = require("./comment");
const user_1 = require("./user");
const video_1 = require("./video");
let Vote = class Vote {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Vote.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Vote.prototype, "value", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], Vote.prototype, "videoId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => video_1.Video, { nullable: true }),
    __metadata("design:type", Object)
], Vote.prototype, "video", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], Vote.prototype, "userId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => user_1.User, { nullable: true }),
    __metadata("design:type", Object)
], Vote.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], Vote.prototype, "commentId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => comment_1.Comment, { nullable: true }),
    __metadata("design:type", Object)
], Vote.prototype, "comment", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], Vote.prototype, "createdAt", void 0);
Vote = __decorate([
    (0, type_graphql_1.ObjectType)()
], Vote);
exports.Vote = Vote;
//# sourceMappingURL=vote.js.map