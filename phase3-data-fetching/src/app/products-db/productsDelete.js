"use server";
import { deleteProduct } from "@/prisma-db";
import { revalidatePath } from "next/cache";

export async function removeProduct(id) {
    await deleteProduct(id);
    revalidatePath("/products-db");
    
}