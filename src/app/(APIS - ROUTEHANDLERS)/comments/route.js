import { comments} from "./data"

export async function GET(request) {
    console.log(request.nextUrl.searchParams)
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get("query");
    const filtercomment = query ?  comments.filter(comment => comment.text.includes(query) ) : comments
    return Response.json(filtercomment)
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