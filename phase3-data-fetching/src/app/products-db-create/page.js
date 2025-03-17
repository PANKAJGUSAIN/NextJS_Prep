import { addProduct } from "@/prisma-db";
import { redirect } from "next/navigation";
import SubmitButton from "./button";

export default function addProductsPage(){

    async function creatProduct(formData){
        "use server"
        const title = formData.get("title");
        const price = formData.get("price");
        const description = formData.get("description");

       await addProduct(title , parseInt(price) , description);

       redirect("/products-db");

    }

    return (
        <>
            <form action={creatProduct} className="space-y-4 bg-amber-950">
                <div className="flex flex-col">
                    <label htmlFor="title" className="mb-2 font-semibold">Title:</label>
                    <input type="text" id="title" name="title" required className="p-2 border rounded" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="price" className="mb-2 font-semibold">Price:</label>
                    <input type="number" id="price" name="price" required className="p-2 border rounded" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="description" className="mb-2 font-semibold">Description:</label>
                    <textarea id="description" name="description" required className="p-2 border rounded"></textarea>
                </div>
                <SubmitButton/>
            </form>
        </>
    )
}

