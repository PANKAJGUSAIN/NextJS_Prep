import Link from "next/link";

export default function productComponent() {
    const productId = 101
    return (
        <>
            <h4 className="underline text-amber-900 text-2xl font-extrabold"><Link href="/">Home</Link></h4>
            <h1>
                <ul>
                    <li><Link href='/Products/1'>Product 1</Link></li>
                    <li><Link href='/Products/2'>Product 2</Link></li>
                    <li><Link href='/Products/3' replace>Product 3 with replace(overriding the history)</Link></li>
                    <li><Link href={`/Products/${productId}`}>Dynamic Product link - {productId}</Link></li>
                </ul>
            </h1>
        </>

    )
}