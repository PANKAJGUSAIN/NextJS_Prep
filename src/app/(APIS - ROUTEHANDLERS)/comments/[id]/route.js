import { comments } from "../data";

export async function GET(request , context) {
    console.log(context);
    const { id } = await context.params

    const comment = comments.find(comment => comment.id === parseInt(id))

    return Response.json(comment)
}