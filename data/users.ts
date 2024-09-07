import { FixedRandom } from "../src/common/util/FixedRandom";
import { Role } from "@prisma/client";

// Fixed Random
const random = new FixedRandom(411);

// Create User
const createUser = (name: string) => {
  const idTag = Math.floor(100 + random.next() * 899.99);
  const username = `${name}${idTag}`;
  const email = `${username}@test.com`;
  const password = `${username}%`;
  const role = Role.USER;
  const bio = `Hi everyone, my name is ${name}, and I'm happy to meet people!`;
  const profileImage = "";
  const thumbnailImage = "";
  const lastActiveMessageAt = new Date();
  return {
    name: `${name}`,
    username,
    email,
    password,
    role,
    bio,
    profileImage,
    thumbnailImage,
    lastActiveMessageAt,
  };
};

export const userNames = [
  "Adam",
  "Bianca",
  "Calvin",
  "Diana",
  "Erica",
  "Floyd",
  "George",
  "Heather",
  "Isaac",
  "Jill",
  "Kevin",
  "Liona",
  "Margaret",
  "Nathan",
  "Oscar",
];

export const users = userNames.map(createUser);
