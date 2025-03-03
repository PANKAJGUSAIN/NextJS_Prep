import Link from "next/link";

export default function home () {
    return (
        <div>
            <h1 className="text-3xl font-bold ">Home Page</h1>
            <h4 className="underline text-amber-900 text-2xl font-extrabold"><Link href ="/blog">Blog</Link></h4>
            <h4  className="underline text-amber-900 text-2xl font-extrabold"><Link href ="/Products">Products</Link></h4>
            <h4  className="underline text-amber-900 text-2xl font-extrabold"><Link href ="/articles/breaking-news-123?lang=en">Read in English</Link></h4>
            <h4  className="underline text-amber-900 text-2xl font-extrabold"><Link href ="/articles/breaking-news-123?lang=fr">Read in French</Link></h4>
        </div>
    )
}