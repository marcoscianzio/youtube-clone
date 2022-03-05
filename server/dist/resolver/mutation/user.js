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
exports.UserMutation = void 0;
const type_graphql_1 = require("type-graphql");
let UserMutation = class UserMutation {
    async toggleSubscribe(id, { prisma, req }) {
        if (id === req.session.userId) {
            throw new Error("you can't follow yourselve");
        }
        const user = await prisma.user.findUnique({
            where: {
                githubId: id,
            },
            select: {
                subscribers: {
                    where: {
                        githubId: req.session.userId,
                    },
                },
            },
        });
        if (!user) {
            throw new Error("user not found");
        }
        const isAlreadySubscribe = user.subscribers.length > 0;
        if (isAlreadySubscribe) {
            await prisma.user.update({
                where: {
                    githubId: req.session.userId,
                },
                data: {
                    subscribed: {
                        disconnect: {
                            githubId: id,
                        },
                    },
                },
            });
        }
        else {
            await prisma.user.update({
                where: {
                    githubId: req.session.userId,
                },
                data: {
                    subscribed: {
                        connect: {
                            githubId: id,
                        },
                    },
                },
            });
        }
        return true;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserMutation.prototype, "toggleSubscribe", null);
UserMutation = __decorate([
    (0, type_graphql_1.Resolver)()
], UserMutation);
exports.UserMutation = UserMutation;
//# sourceMappingURL=user.js.map