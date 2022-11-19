import { Router } from "express";
import writeController from "../controller/writeController";

const router: Router = Router();

//* 프로덕트 생성 - POST /write
router.post('/:userId', writeController.writeProduct);

export default router;