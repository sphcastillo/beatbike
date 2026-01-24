import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",

  // Prisma Migrate reads the DB URL from here in Prisma 7
  datasource: {
    url: process.env.DATABASE_URL!,
  },

  // Prisma seed command configuration
  migrations: {
    seed: "tsx prisma/seed.ts",
  },
});
