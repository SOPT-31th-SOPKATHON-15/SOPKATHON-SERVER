import { Router } from "express";
import popUpRouter from "./popUpRouter";
import productRouter from "./ProductRouter";

const router: Router = Router();

router.use("/products", productRouter);
router.use("/products", popUpRouter);

export default router;



