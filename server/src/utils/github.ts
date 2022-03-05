import { PrismaClient } from "@prisma/client";
import { Application } from "express";
import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";

export const withGithub = async (app: Application, prisma: PrismaClient) => {
  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        callbackURL: "http://localhost:4000/oauth/github",
        scope: ["user:email"],
      },
      async (accessToken: any, refreshToken: any, profile: any, done: any) => {
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
      }
    )
  );

  app.get(
    "/auth/github",
    passport.authenticate("github", {
      session: false,
      scope: ["user:email"],
    })
  );

  app.get(
    "/oauth/github",
    passport.authenticate("github", { session: false }),
    (req: any, res: any) => {
      req.session.userId = req.user.user.githubId;

      res.redirect("http://localhost:3000");
    }
  );
};
