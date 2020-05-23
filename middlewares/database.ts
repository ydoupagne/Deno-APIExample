import { Database } from 'https://deno.land/x/denodb/mod.ts';

const db = new Database('mysql', {
  host: "localhost",
  username: "yoann",
  password: "qqWO38GtDdSmQvLL",
  database: "deno",
  port: 3306
});

export { db };