import { Request, Response } from "express";
import statusCode from "../constants/statusCode";
import responseMessage from "../constants/responseMessage";
import homeService from "../service/HomeService";

//* ํ ์กฐํ
const getHomeProduct = async (req: Request, res: Response) => {
    const data = await homeService.getHomeProduct();
    return res.status(statusCode.OK).json({ status: statusCode.OK, success: true, message: responseMessage.GET_POP_UP_SUCCESS, data: { monthList: data } });
}

const homeController = {
    getHomeProduct,
};

export default homeController;