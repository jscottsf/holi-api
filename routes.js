import { Router } from "https://deno.land/x/oak/mod.ts";
import getHolidays from "./controllers/getHolidays.js";

const router = new Router();

router
  .get("/holidays/:country/:year", getHolidays)
  .get("/holidays/:country/:state/:year", getHolidays);

export default router;
