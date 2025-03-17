import { getProducts } from "@/prisma-db";

export default async function productsdbpage() {
    const product = await getProducts();
    return (
        <div className="p-4 max-w-md mx-auto bg-black rounded-xl shadow-md space-y-4">
            {product.map((item) => (
                <div key={item.id} className="p-4 bg-white rounded-xl shadow-md space-y-4">
                    <div className="text-xl font-medium text-black">{item.id}</div>
                    <div className="text-lg font-semibold text-gray-900">{item.title}</div>
                    <p className="text-gray-500">{item.description}</p>
                    <div className="text-lg font-bold text-gray-900">${item.price}</div>
                </div>
            ))}
        </div>
    );
}