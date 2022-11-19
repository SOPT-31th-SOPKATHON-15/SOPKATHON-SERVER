import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const writeProduct = async(productName: string, price: number, contents: string, userId: number ) => {
    const data = await prisma.product.create({
      data: {
        productName: productName,
        price: price,
        contents: contents,
        userId: userId,
      },
    });
  
    return data; 
  
};

const writeTime = async(productId: number, year: string, month: string, day: string , timeString: string) => {
    const time = await prisma.time.create({
        data: {
            productId: productId,
            year: year,
            month: month,
            day: day,
            time: timeString,
        }
    });

    return time;
}

const writeService = { writeProduct, writeTime }

export default writeService;