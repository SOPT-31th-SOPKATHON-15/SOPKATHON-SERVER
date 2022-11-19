import { Router } from "express";
import popUpRouter from "./popUpRouter";
<<<<<<< HEAD
import homeRouter from "./HomeRouter";
=======
import productRouter from "./ProductRouter";
>>>>>>> d93532f46ccba997a104364615282b2bb4c5e9f4

const router: Router = Router();

router.use("/products", productRouter);
router.use("/products", popUpRouter);
router.use("/home", homeRouter);

export default router;



