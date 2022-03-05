import { PrismaClient } from "@prisma/client";
import { Request } from "express";
import { Session } from "express-session";

export const prisma: PrismaClient = new PrismaClient();

export type Context = {
  req: Request & {
    session: Session & {
      userId?: string;
    };
  };
  prisma: PrismaClient;
  res: Response;
};
