import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getProduct = async (productId: number) => {
    const data = await prisma.product.findUnique({
        where: {
            id: productId,
        },
    });
    return data;
}

const popUpService = {
    getProduct,
}

export default popUpService;