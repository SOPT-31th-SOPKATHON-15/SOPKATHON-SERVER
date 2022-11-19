import { Router } from "express";
import popUpRouter from "./popUpRouter";
import homeRouter from "./HomeRouter";
import productRouter from "./ProductRouter";

const router: Router = Router();


router.use("/product-list", productRouter);
router.use("/products", popUpRouter);
router.use("/home", homeRouter);

export default router;



