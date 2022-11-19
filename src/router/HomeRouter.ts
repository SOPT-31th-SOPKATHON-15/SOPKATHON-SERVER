import { Router } from "express";
import homeController from "../controller/HomeController";

const router: Router = Router();

//* home data 조회
router.get("/", homeController.getHomeProduct)

export default router;
