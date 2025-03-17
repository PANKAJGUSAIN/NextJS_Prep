import { Suspense } from "react";
import Author from "./Author";

export default async function PostSequential() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    const filteredPosts = posts.filter((post) => post.id % 10 === 1);

    return (
        <div className="p-4">
            {filteredPosts.map((post) => (
                <div key={post.id} className="mb-4 p-4 border rounded shadow">
                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                    <p>{post.body}</p>
                    <Suspense fallback={<>Loadin...</>}>
                        <Author userId={post.userId} />
                    </Suspense>
                </div>
            ))}
        </div>
    )
}