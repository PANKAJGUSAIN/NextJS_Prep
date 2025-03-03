import Link from "next/link";

export default function productComponent() {
    return (
        <>
            <h4 className="underline text-amber-900 text-2xl font-extrabold"><Link href="/">Home</Link></h4>
            <h1>
                <ul>
                    <li>Product 1</li>
                    <li>Product 2</li>
                    <li>Product 3</li>
                </ul>
            </h1>
        </>

    )
}