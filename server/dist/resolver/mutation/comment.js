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
exports.CommentMutation = void 0;
const comment_1 = require("../../models/comment");
const type_graphql_1 = require("type-graphql");
const comment_2 = require("../../input/comment");
let CommentMutation = class CommentMutation {
    async createComment(values, { prisma, req }) {
        return await prisma.comment.create({
            data: Object.assign(Object.assign({}, values), { authorId: req.session.userId }),
        });
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => comment_1.Comment),
    __param(0, (0, type_graphql_1.Arg)("values")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comment_2.CreateCommentInput, Object]),
    __metadata("design:returntype", Promise)
], CommentMutation.prototype, "createComment", null);
CommentMutation = __decorate([
    (0, type_graphql_1.Resolver)()
], CommentMutation);
exports.CommentMutation = CommentMutation;
//# sourceMappingURL=comment.js.map