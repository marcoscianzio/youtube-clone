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
var User_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const type_graphql_1 = require("type-graphql");
const comment_1 = require("./comment");
const video_1 = require("./video");
const vote_1 = require("./vote");
let User = User_1 = class User {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "githubId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "displayName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], User.prototype, "verified", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "pic", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "banner", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "location", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [video_1.Video], { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "videos", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [vote_1.Vote], { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "votes", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [comment_1.Comment], { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "replies", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [comment_1.Comment], { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "comments", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [User_1], { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "subscribers", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [User_1], { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "subscribed", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [video_1.Video], { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "history", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [video_1.Video], { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "seeLater", void 0);
User = User_1 = __decorate([
    (0, type_graphql_1.ObjectType)()
], User);
exports.User = User;
//# sourceMappingURL=user.js.map