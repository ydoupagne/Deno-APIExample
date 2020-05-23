import { Application } from "https://deno.land/x/oak/mod.ts";
import { Snelm } from "https://deno.land/x/snelm/mod.ts";

import router from "./router.ts";

// Build the application
const app = new Application();

const snelm = new Snelm('oak');
// Implement the snelm middleware
await snelm.init();
app.use((ctx: any, next: any) => {
  ctx.response = snelm.snelm(ctx.request, ctx.response);
  next();
});

// Implement the error middleware
app.use(async (ctx: any, next: any) => {
  try {
    await next();
  } catch (error) {
    // TODO: Handle specific HTTP error
    // TODO: Handle specific MySQL error
    console.log(error);
  }
});

// Load the applications routes
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
