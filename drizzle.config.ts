import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "mysql",
  dbCredentials: {
    host: process.env.DB_HOST!,
    port: 3306,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    user: process.env.DB_USER!,
  },
});
