import { Router } from "express";
import { productController } from "../controller";

const router: Router = Router();

//* 특정 유저 조회 - [GET] api/user/:userId
router.get("/", productController.getProductList);


export default router;