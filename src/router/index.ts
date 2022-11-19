import { Router } from "express";
import popUpRouter from "./PopUpRouter";
import productRouter from "./ProductRouter";

const router: Router = Router();


router.use("/product-list", productRouter);
router.use("/products", popUpRouter);

export default router;



