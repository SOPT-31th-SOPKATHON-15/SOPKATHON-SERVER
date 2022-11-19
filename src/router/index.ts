import { Router } from "express";
import popUpRouter from "./popUpRouter";
import homeRouter from "./HomeRouter";

const router: Router = Router();

router.use("/products", popUpRouter);
router.use("/home", homeRouter);


export default router;
