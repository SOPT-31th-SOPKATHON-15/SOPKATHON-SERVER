import { Router } from "express";
import popUpRouter from "./popUpRouter";

const router: Router = Router();

router.use("/products", popUpRouter);


export default router;
