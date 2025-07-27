import { createSchema, number, string, table } from "@rocicorp/zero";

export const schema = createSchema({
  tables: [table('items').columns({
    id: number(),
    name: string(),
    description: string(),
    createdAt: number(),
    updatedAt: number(),
  }).primaryKey('id')]
});

export type Schema = typeof schema;