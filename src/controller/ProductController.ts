import { Request, Response } from "express";
import { rm, sc } from "../constants";
import { fail, success } from "../constants/response";
import { productService } from "../service";



const getProductList = async (req: Request, res: Response) => {
  const year = req.query.year;
  const month = req.query.month;

  const data = await productService.getProducts(String(year), String(month));
  if(!data) return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, rm.NULL_VALUE));
  res.status(sc.OK).send(success(sc.OK, rm.GET_POP_UP_SUCCESS, data));
};

const productController = {
    getProductList,
};

export default productController;