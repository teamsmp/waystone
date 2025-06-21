import {
  mysqlTable,
  mysqlSchema,
  type AnyMySqlColumn,
  int,
  char,
  text,
  varchar,
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const beamItems = mysqlTable("beam_items", {
  id: int().autoincrement().notNull(),
  uuid: char({ length: 36 }).notNull(),
  serializedItem: text("serialized_item").notNull(),
});

export const servers = mysqlTable("servers", {
  id: int().autoincrement().notNull(),
  name: varchar({ length: 255 }).notNull(),
  mark: varchar({ length: 255 }).notNull(),
  players: int().default(0).notNull(),
});
