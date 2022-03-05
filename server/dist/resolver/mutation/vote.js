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
exports.VoteMutation = void 0;
const type_graphql_1 = require("type-graphql");
const vote_1 = require("../../input/vote");
const video_1 = require("../../models/video");
let VoteMutation = class VoteMutation {
    async vote(values, { prisma, req }) {
        const alreadyExistingVote = await prisma.vote.findFirst({
            where: {
                userId: req.session.userId,
                AND: {
                    videoId: values.videoId,
                    AND: {
                        commentId: values.commentId,
                    },
                },
            },
        });
        if (alreadyExistingVote) {
            if (alreadyExistingVote.value === values.value) {
                await prisma.vote.delete({
                    where: {
                        id: alreadyExistingVote.id,
                    },
                });
            }
            else {
                await prisma.vote.update({
                    where: {
                        id: alreadyExistingVote.id,
                    },
                    data: {
                        value: values.value,
                    },
                });
            }
        }
        else {
            await prisma.vote.create({
                data: values,
            });
        }
        return true;
    }
    async myVotes({ prisma, req }) {
        const response = await prisma.vote.findMany({
            where: {
                userId: req.session.userId,
                AND: {
                    value: 1,
                },
            },
            select: {
                video: {
                    include: {
                        author: {
                            select: {
                                githubId: true,
                                displayName: true,
                                username: true,
                            },
                        },
                    },
                },
            },
        });
        const videos = Array.from(response, (x) => x.video);
        return videos;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("values", { validate: true })),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vote_1.VoteInput, Object]),
    __metadata("design:returntype", Promise)
], VoteMutation.prototype, "vote", null);
__decorate([
    (0, type_graphql_1.Query)(() => [video_1.Video]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VoteMutation.prototype, "myVotes", null);
VoteMutation = __decorate([
    (0, type_graphql_1.Resolver)()
], VoteMutation);
exports.VoteMutation = VoteMutation;
//# sourceMappingURL=vote.js.map