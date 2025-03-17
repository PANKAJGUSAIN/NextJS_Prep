import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seedProduct  = async() =>{
    const count = await prisma.product.count();
    if(count === 0){
        await prisma.product.createMany({
            data:[
                { title: "Product 1",price: 10.0,description: "Description for product 1"},
                { title: "Product 2",price: 20.0,description: "Description for product 2"},
                { title: "Product 3",price: 30.0,description: "Description for product 3"},
                { title: "Product 4",price: 40.0,description: "Description for product 4"},
                { title: "Product 5",price: 50.0,description: "Description for product 5"}
            ]
        })
    }
}

seedProduct();


export async function getProducts() {
    await new Promise((resolve) => setTimeout(resolve , 1500))
    return prisma.product.findMany();   
}

export async function getProduct(id) {
    await new Promise((resolve) => setTimeout(resolve , 1500))
    return prisma.product.findUnique({
        where:{id},
    });   
}

export async function addProduct(title , price , description) {
    await new Promise((resolve) => setTimeout(resolve , 1500))
    return prisma.product.create({
        data:{title ,price ,description}
    })
}

export async function updateProduct(id, data) {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return prisma.product.update({
        where: { id },
        data,
    });
}

export async function deleteProduct(id) {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return prisma.product.delete({
        where: { id },
    });
}