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
exports.Video = void 0;
const type_graphql_1 = require("type-graphql");
const comment_1 = require("./comment");
const user_1 = require("./user");
const vote_1 = require("./vote");
let Video = class Video {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Video.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Video.prototype, "file", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Video.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Video.prototype, "thumbnail", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Video.prototype, "duration", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Video.prototype, "views", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], Video.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], Video.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => user_1.User, { nullable: true }),
    __metadata("design:type", Object)
], Video.prototype, "author", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Video.prototype, "authorId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], Video.prototype, "isPrivate", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [vote_1.Vote], { nullable: true }),
    __metadata("design:type", Object)
], Video.prototype, "votes", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [comment_1.Comment], { nullable: true }),
    __metadata("design:type", Object)
], Video.prototype, "comments", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [user_1.User], { nullable: true }),
    __metadata("design:type", Object)
], Video.prototype, "history", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [user_1.User], { nullable: true }),
    __metadata("design:type", Object)
], Video.prototype, "seeLater", void 0);
Video = __decorate([
    (0, type_graphql_1.ObjectType)()
], Video);
exports.Video = Video;
//# sourceMappingURL=video.js.map