import { headers } from "next/headers";
import { comments } from "./data"

export async function GET() {
    return Response.json(comments)
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