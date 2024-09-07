// Imports
import { PrismaClient } from "@prisma/client";
import { users } from "../data/users";

// Set Up
const prismaClient = new PrismaClient();

// Main Module Method Declaration
async function main() {
  await prismaClient.user.createMany({
    data: users,
  });
}

// Main Module Method
main()
  .catch((error) => {
    console.log(error);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
