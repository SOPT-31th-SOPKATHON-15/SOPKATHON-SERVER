import { Request, Response } from "express";
import { writeService } from "../service";

const writeProduct =  async ( req: Request, res: Response ) => {
  const { userId } = req.params;
  const { productName, price, contents } = req.body;

  if (!productName || !price || !contents) {
    return res.status(400).json({ status: 400, success: false, message: "필수값이 빠져있습니다." });
  }

  const data = await writeService.writeProduct(productName, price, contents, +userId);
  
  const productId = data.id;

  const today = new Date();
  const year = String(today.getFullYear());
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = String(today.getDate());
  const hours = ('0' + today.getHours()).slice(-2); 
  const minutes = ('0' + today.getMinutes()).slice(-2);
  const timeString = hours + ':' + minutes;

  const time = await writeService.writeTime(productId, year, month, day, timeString);



  if (!data) {
    return res.status(400).json({ status: 400, success: false, message: "필수값이 빠져있습니다." });
  }

  return res.status(200).json({
      status: 200,
      success: true,
      message: "작성 성공하였습니다.",
      data,
  })
}

const writeController = { writeProduct }

export default writeController;