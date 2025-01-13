import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/utils/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: `${process.env.NEXT_PUBLIC_DB}`,
  },
});


