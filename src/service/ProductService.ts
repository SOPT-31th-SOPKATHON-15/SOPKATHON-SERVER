import { PrismaClient } from "@prisma/client";
import { rm, sc } from "../constants";
import { fail, success } from "../constants/response";
const prisma = new PrismaClient();


const getProducts = async (year: string, month: string) => {
    const productObjList = await getTimes(year, month);
    const products: any[] = [];

    for (const obj of productObjList) {
        try{
            
            const product = await getProductById(obj.productId);
            const timeObj = {
                year: obj.year,
                month: obj.month,
                day: obj.day,
                time: obj.time
            }
            products.push(Object.assign(timeObj, product));
        }catch{
            return [];
        }
    }

    const results = products.sort(function(a,b){
        const numA = Number(a.day);
        const numB = Number(b.day);
        
        if(numA > numB) return -1;
        else if (numB > numA) return 1;
        else return 0;
    });
    return results;
};

const getProductById = async(productId: number) => {
    const data = prisma.product.findUnique({
        where: {
            id: productId
        },
        select: {
            productName: true,
            price: true,
        }
    });

    return data;
};

const getTimes = async (year: string, month: string) => {
    const timeList = prisma.time.findMany({
        where: {
            year,
            month
        }
    });

    return timeList;
};
  

const productService = {
    getProducts,
    getTimes,
    getProductById,
};

export default productService;