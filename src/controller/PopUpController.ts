import { Request, Response } from "express";
import statusCode from "../constants/statusCode";
import responseMessage from "../constants/responseMessage";
import { popUpService } from "../service";

//* 팝업 상품 조회
const getProduct = async (req: Request, res: Response) => {
    const { productId } = req.params;
    if (!productId) {
        return res.status(statusCode.BAD_REQUEST).json({ status: statusCode.BAD_REQUEST, message: responseMessage.NOT_FOUND })
    }
    const data = await popUpService.getProduct(+productId);
    return res.status(statusCode.OK).json({ status: statusCode.OK, success: true, message: responseMessage.GET_POP_UP_SUCCESS, data: { todayProductList: data } });
}

const popUpController = {
    getProduct,
};

export default popUpController;