import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";

export const db = drizzle({
  connection: {
    host: process.env.DB_HOST!,
    database: process.env.DB_NAME!,
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
  },
});
