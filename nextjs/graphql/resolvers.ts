import { users } from "../data/users";
import prisma from "../lib/prisma";

export const resolvers = {
  Query: {
    users: async (_parent, args, context) =>
      await context.prisma.user.findMany(),
  },
};
