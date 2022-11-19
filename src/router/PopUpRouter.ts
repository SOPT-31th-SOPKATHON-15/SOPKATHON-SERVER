import { Router } from "express";
import { popUpController } from "../controller";

const router: Router = Router();

//* 리스트 팝업 조회 - GET /products/:productId
router.get("/:productId", popUpController.getProduct);

export default router;