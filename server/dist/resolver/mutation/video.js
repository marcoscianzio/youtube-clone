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
exports.VideoMutation = void 0;
const video_1 = require("../../models/video");
const type_graphql_1 = require("type-graphql");
const video_2 = require("../../input/video");
const runtime_1 = require("@prisma/client/runtime");
let VideoMutation = class VideoMutation {
    async createVideo(values, { prisma, req }) {
        return await prisma.video.create({
            data: Object.assign(Object.assign({}, values), { author: {
                    connect: {
                        githubId: req.session.userId,
                    },
                } }),
        });
    }
    async seeLater(id, { prisma, req }) {
        try {
            await prisma.seeLater.create({
                data: {
                    user: {
                        connect: {
                            githubId: req.session.userId,
                        },
                    },
                    video: {
                        connect: {
                            id,
                        },
                    },
                },
            });
        }
        catch (error) {
            if (error instanceof runtime_1.PrismaClientKnownRequestError) {
                if (error.code === "P2002") {
                    await prisma.seeLater.delete({
                        where: {
                            videoId_userId: {
                                userId: req.session.userId,
                                videoId: id,
                            },
                        },
                    });
                }
            }
        }
        return true;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => video_1.Video),
    __param(0, (0, type_graphql_1.Arg)("values", { validate: true })),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [video_2.CreateVideoInput, Object]),
    __metadata("design:returntype", Promise)
], VideoMutation.prototype, "createVideo", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], VideoMutation.prototype, "seeLater", null);
VideoMutation = __decorate([
    (0, type_graphql_1.Resolver)()
], VideoMutation);
exports.VideoMutation = VideoMutation;
//# sourceMappingURL=video.js.map