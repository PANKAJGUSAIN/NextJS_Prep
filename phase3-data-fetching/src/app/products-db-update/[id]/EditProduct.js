"use server"

import { addProduct, updateProduct } from "@/prisma-db";
import { redirect } from "next/navigation";


export async function EditProduct(id , prevState , formData) {
 
    const title = formData.get("title");
    const price = formData.get("price");
    const description = formData.get("description");


    const errors = {};
    if (!title) {
        errors.title = "Title is required"
    }
    if (!price) {
        errors.title = "price is required"
    }
    if (!description) {
        errors.title = "desciption is required"
    }

    if (Object.keys(errors).length > 0) {
        return { errors };
    }

    await updateProduct(id , title, parseInt(price), description);

    redirect("/products-db");

}