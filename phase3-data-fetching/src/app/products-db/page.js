import { getProducts } from "@/prisma-db";
import Link from "next/link";
import { removeProduct } from "./productsDelete";

export default async function productsdbpage(props) {
    const searchParams = await props.searchParams;
    console.log(searchParams);
    const product = await getProducts(searchParams.query);
    return (
        <div className="p-4 max-w-md mx-auto bg-black rounded-xl shadow-md space-y-4">
            {product.map((item) => (
                <div key={item.id} className="p-4 bg-white rounded-xl shadow-md space-y-4">
                    <div className="text-xl font-medium text-black">{item.id}</div>
                    <div className="text-lg font-semibold text-gray-900">
                        <Link href={`/products-db-update/${item.id}`}>{item.title}</Link></div>
                    <p className="text-gray-500">{item.description}</p>
                    <div className="text-lg font-bold text-gray-900">${item.price}</div>
                    <form action={removeProduct.bind(null , item.id)}>
                        <button className="bg-red-400 p-1 rounded-2xl">
                            Delete
                        </button>
                    </form>
                </div>
            ))}
        </div>
    );
}