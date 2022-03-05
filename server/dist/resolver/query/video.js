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
exports.VideoQuery = void 0;
const video_1 = require("../../models/video");
const type_graphql_1 = require("type-graphql");
const pagination_1 = require("../../args/pagination");
let VideoPagination = class VideoPagination {
};
__decorate([
    (0, type_graphql_1.Field)(() => [video_1.Video]),
    __metadata("design:type", Array)
], VideoPagination.prototype, "videos", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], VideoPagination.prototype, "hasMore", void 0);
VideoPagination = __decorate([
    (0, type_graphql_1.ObjectType)()
], VideoPagination);
let VideoQuery = class VideoQuery {
    async video(id, { prisma, req }) {
        const video = await prisma.video.update({
            data: {
                views: {
                    increment: 1,
                },
            },
            where: {
                id,
            },
            include: {
                author: true,
            },
        });
        if (!video) {
            throw new Error("no video was found");
        }
        await prisma.user.update({
            where: {
                githubId: req.session.userId,
            },
            data: {
                history: {
                    create: {
                        videoId: video.id,
                    },
                },
            },
        });
        return video;
    }
    async videos({ take, cursor }, { prisma }) {
        const realTake = take + 1;
        let videos = null;
        if (cursor) {
            videos = await prisma.video.findMany({
                orderBy: {
                    createdAt: "desc",
                },
                take: realTake,
                cursor: {
                    id: cursor,
                },
                include: {
                    author: {
                        select: {
                            githubId: true,
                            displayName: true,
                            username: true,
                            verified: true,
                            pic: true,
                        },
                    },
                },
            });
        }
        else {
            videos = await prisma.video.findMany({
                orderBy: {
                    createdAt: "desc",
                },
                take: realTake,
                include: {
                    author: {
                        select: {
                            githubId: true,
                            displayName: true,
                            username: true,
                            verified: true,
                            pic: true,
                        },
                    },
                },
            });
        }
        const hasMore = videos.length === realTake;
        return { videos: videos.slice(0, take), hasMore };
    }
    async subsVideos({ take, cursor }, { prisma, req }) {
        const realTake = take + 1;
        let subscribedIds = await prisma.user.findMany({
            where: {
                subscribers: {
                    some: {
                        githubId: req.session.userId,
                    },
                },
            },
            select: {
                githubId: true,
            },
        });
        if (subscribedIds.length < 1) {
            return null;
        }
        subscribedIds = Array.from(subscribedIds, (x) => x.githubId);
        const videos = await prisma.video.findMany({
            where: {
                authorId: {
                    in: subscribedIds,
                },
            },
            orderBy: {
                createdAt: "asc",
            },
            take: realTake,
            cursor: {
                createdAt: cursor,
            },
        });
        const hasMore = videos.length === realTake;
        return { videos: videos.slice(0, take), hasMore };
    }
    async seeLater({ cursor, take }, { prisma, req }) {
        const realTake = take + 1;
        let videos = await prisma.user
            .findUnique({
            where: {
                githubId: req.session.userId,
            },
        })
            .seeLater({
            select: {
                video: true,
            },
            orderBy: {
                addedAt: "asc",
            },
            take: realTake,
            cursor: {
                addedAt: cursor,
            },
        });
        videos = Array.from(videos, (x) => x.video);
        const hasMore = videos.length === realTake;
        return { videos: videos.slice(0, take), hasMore };
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => video_1.Video),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], VideoQuery.prototype, "video", null);
__decorate([
    (0, type_graphql_1.Query)(() => VideoPagination),
    __param(0, (0, type_graphql_1.Args)()),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.PaginationArgs, Object]),
    __metadata("design:returntype", Promise)
], VideoQuery.prototype, "videos", null);
__decorate([
    (0, type_graphql_1.Query)(() => VideoPagination, { nullable: true }),
    __param(0, (0, type_graphql_1.Args)()),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.PaginationArgs, Object]),
    __metadata("design:returntype", Promise)
], VideoQuery.prototype, "subsVideos", null);
__decorate([
    (0, type_graphql_1.Query)(() => VideoPagination),
    __param(0, (0, type_graphql_1.Args)()),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.PaginationArgs, Object]),
    __metadata("design:returntype", Promise)
], VideoQuery.prototype, "seeLater", null);
VideoQuery = __decorate([
    (0, type_graphql_1.Resolver)()
], VideoQuery);
exports.VideoQuery = VideoQuery;
//# sourceMappingURL=video.js.map