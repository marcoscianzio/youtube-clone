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
exports.CommentQuery = void 0;
const comment_1 = require("../../models/comment");
const type_graphql_1 = require("type-graphql");
const pagination_1 = require("../../args/pagination");
let CommentPagination = class CommentPagination {
};
__decorate([
    (0, type_graphql_1.Field)(() => [comment_1.Comment]),
    __metadata("design:type", Array)
], CommentPagination.prototype, "comments", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], CommentPagination.prototype, "hasMore", void 0);
CommentPagination = __decorate([
    (0, type_graphql_1.ObjectType)()
], CommentPagination);
let CommentQuery = class CommentQuery {
    async videoComments({ cursor, take }, id, { prisma }) {
        const realTake = take + 1;
        const comments = await prisma.video
            .findUnique({
            where: {
                id,
            },
        })
            .comments({
            where: {
                parentCommentId: null,
            },
            orderBy: {
                createdAt: "asc",
            },
            take: realTake,
            cursor: {
                createdAt: cursor,
            },
            include: {
                author: {
                    select: {
                        username: true,
                        githubId: true,
                        pic: true,
                    },
                },
            },
        });
        const hasMore = comments.length === realTake;
        return { comments: comments.slice(0, take), hasMore };
    }
    async commentReplies({ cursor, take }, parentCommentId, { prisma }) {
        const realTake = take + 1;
        const comments = await prisma.comment.findMany({
            where: {
                parentCommentId: parentCommentId,
            },
            orderBy: {
                createdAt: "asc",
            },
            take: realTake,
            cursor: {
                createdAt: cursor,
            },
            include: {
                author: {
                    select: {
                        username: true,
                        githubId: true,
                        pic: true,
                    },
                },
            },
        });
        const hasMore = comments.length === realTake;
        return { comments: comments.slice(0, take), hasMore };
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => CommentPagination),
    __param(0, (0, type_graphql_1.Args)()),
    __param(1, (0, type_graphql_1.Arg)("id")),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.PaginationArgs, String, Object]),
    __metadata("design:returntype", Promise)
], CommentQuery.prototype, "videoComments", null);
__decorate([
    (0, type_graphql_1.Query)(() => CommentPagination),
    __param(0, (0, type_graphql_1.Args)()),
    __param(1, (0, type_graphql_1.Arg)("parentCommentId")),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.PaginationArgs, String, Object]),
    __metadata("design:returntype", Promise)
], CommentQuery.prototype, "commentReplies", null);
CommentQuery = __decorate([
    (0, type_graphql_1.Resolver)()
], CommentQuery);
exports.CommentQuery = CommentQuery;
//# sourceMappingURL=comments.js.map