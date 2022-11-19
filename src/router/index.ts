import { Router } from "express";
import popUpRouter from "./popUpRouter";
import writeRouter from "./writeRouter";
import homeRouter from "./HomeRouter";
import productRouter from "./ProductRouter";

const router: Router = Router();

router.use("/products", productRouter);
router.use("/products", popUpRouter);
router.use("/home", homeRouter);
router.use("/write", writeRouter);

export default router;

