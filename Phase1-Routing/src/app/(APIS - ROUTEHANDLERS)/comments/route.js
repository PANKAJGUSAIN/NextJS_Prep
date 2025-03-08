import { redirect } from "next/dist/server/api-utils";
import { comments } from "./data"

export async function GET(request) {
    // Perform the redirection
    // return new Response(null, {
    //     status: 307,
    //     headers: {
    //         Location: "/api/v2/users",
    //     },
    // });
;
    // The following code will not be executed due to the redirection
    console.log(request.nextUrl.searchParams);
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filtercomment = query ? comments.filter(comment => comment.text.includes(query)) : comments;
    return new Response(
        JSON.stringify(filtercomment),
        {
            headers: { "Content-Type": "application/json" },
            status: 200,
        }
    );
}

export async function POST(request) {
    const fetchcomment = await request.json();
    const newComment = {
        id: comments.length,
        "text": fetchcomment.text
    }
    comments.push(newComment);
    return new Response(
        JSON.stringify(newComment),
        {
            headers: { "Content-Type": "application/json" },
            status: 201,
        }
    )
}