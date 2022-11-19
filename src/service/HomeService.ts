import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getHomeProduct = async () => {
    const dataObj = new Map();
    const arr = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

    const finalArray: any[] = [];
    for (const array of arr) {
        const data = await prisma.time.findMany({
            where: {
                month: array,
            }
        })
        let priceSum = 0;

        for (const time of data) {

            const price = await prisma.product.findUnique({
                where: {
                    id: time.productId,
                }
            })
            priceSum += price.price;
        }
        const timeObj = {
            month: array,
            price: priceSum,
            counts: data.length
        }
        finalArray.push(timeObj);
    }

    return finalArray;
}

const homeService = {
    getHomeProduct,
}




export default homeService; 