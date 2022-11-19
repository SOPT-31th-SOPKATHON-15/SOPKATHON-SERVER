import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getHomeProduct = async () => {
    const data = await prisma.product.findMany
}

const homeService = {
    getHomeProduct,
}

export default homeService;