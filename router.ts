import { Router } from "https://deno.land/x/oak/mod.ts";

// Import our applications routes
import * as UserRoutes from "./src/models/users/users.route.ts";

// Build the router
const router = new Router();

// Users
router.get("/", UserRoutes.getUser);
router.post("/create", UserRoutes.createUser)

export default router;