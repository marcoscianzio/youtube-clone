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
exports.UserQuery = void 0;
const user_1 = require("../../models/user");
const type_graphql_1 = require("type-graphql");
let UserQuery = class UserQuery {
    async users({ prisma }) {
        return await prisma.user.findMany();
    }
    async me({ prisma, req }) {
        const user = await prisma.user.findUnique({
            where: {
                githubId: req.session.userId || "",
            },
        });
        return user || null;
    }
    async user(id, { prisma }) {
        const user = await prisma.user.findUnique({
            where: {
                githubId: id,
            },
            include: {
                subscribed: true,
                subscribers: true,
                votes: true,
            },
        });
        if (!user) {
            throw new Error("no user was found");
        }
        return user;
    }
    async mySubscriptions({ prisma, req }) {
        return await prisma.user
            .findUnique({
            where: {
                githubId: req.session.userId,
            },
        })
            .subscribed({
            select: {
                pic: true,
                displayName: true,
                username: true,
                githubId: true,
            },
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [user_1.User]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserQuery.prototype, "users", null);
__decorate([
    (0, type_graphql_1.Query)(() => user_1.User, { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserQuery.prototype, "me", null);
__decorate([
    (0, type_graphql_1.Query)(() => user_1.User),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserQuery.prototype, "user", null);
__decorate([
    (0, type_graphql_1.Query)(() => [user_1.User]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserQuery.prototype, "mySubscriptions", null);
UserQuery = __decorate([
    (0, type_graphql_1.Resolver)()
], UserQuery);
exports.UserQuery = UserQuery;
//# sourceMappingURL=user.js.map