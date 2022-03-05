"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withGithub = void 0;
const passport_1 = __importDefault(require("passport"));
const passport_github2_1 = require("passport-github2");
const withGithub = async (app, prisma) => {
    passport_1.default.use(new passport_github2_1.Strategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: "http://localhost:4000/oauth/github",
        scope: ["user:email"],
    }, async (accessToken, refreshToken, profile, done) => {
        let user = await prisma.user.findUnique({
            where: {
                githubId: profile.id,
            },
        });
        if (!user) {
            user = await prisma.user.create({
                data: {
                    githubId: profile.id,
                    displayName: profile.displayName,
                    username: profile.username,
                    pic: profile.photos[0].value,
                    email: profile.emails[0].value,
                    location: profile._json.location,
                },
            });
        }
        return done(null, {
            user,
            accessToken,
            refreshToken,
        });
    }));
    app.get("/auth/github", passport_1.default.authenticate("github", {
        session: false,
        scope: ["user:email"],
    }));
    app.get("/oauth/github", passport_1.default.authenticate("github", { session: false }), (req, res) => {
        req.session.userId = req.user.user.githubId;
        res.redirect("http://localhost:3000");
    });
};
exports.withGithub = withGithub;
//# sourceMappingURL=github.js.map