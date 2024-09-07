import { enumType, extendType, objectType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("username");
    t.string("email");
    t.string("password");
    t.string("profileImage");
    t.string("thumbnailImage");
    t.field("role", { type: Role });
  },
});

const Role = enumType({
  name: "Role",
  members: ["ADMIN", "AI", "USER", "GUEST"],
});

export const UsersQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("users", {
      type: "User",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.user.findMany();
      },
    });
  },
});
