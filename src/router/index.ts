import { Router } from "express";
import popUpRouter from "./PopUpRouter";
import writeRouter from "./writeRouter";
import homeRouter from "./HomeRouter";
import productRouter from "./ProductRouter";

const router: Router = Router();


router.use("/product-list", productRouter);
router.use("/products", popUpRouter);
router.use("/home", homeRouter);
router.use("/write", writeRouter);

export default router;

