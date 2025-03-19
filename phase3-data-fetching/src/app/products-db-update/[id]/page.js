import { getProduct } from "@/prisma-db"
import EditForm from "./editForm";
import { notFound } from "next/navigation";

export default async function ProductDbUpdate(props) {
    const params = await props.params
    const product = await getProduct(parseInt(params.id));
    if(!product){
        notFound();
    }

    return (
        <EditForm product={product} />
    )
}