import { ProductsComponents } from "@/components/products";
import { Reviews } from "@/components/reviews";
import { Suspense } from "react";

export default function ProductReviews() {
    return (
        <>
            <h1>Product reviews</h1>
            <Suspense fallback={<>Loading Products</>}>
                <ProductsComponents />
            </Suspense>
            <Suspense fallback={<>Loading Reivews</>}>
                <Reviews />
            </Suspense>
        </>
    )
}