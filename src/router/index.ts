import { Router } from "express";
import writeRouter from "./writeRouter";

const router: Router = Router();

router.use("/write", writeRouter);

export default router;