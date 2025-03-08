import { comments } from "../data";

export async function GET(request , context) {
    console.log(context);
    const { id } = await context.params

    const comment = comments.find(comment => comment.id === parseInt(id))

    return Response.json(comment)
}

export async function PATCH(request , context){
    const { id } = await context.params 

    const body = await request.json()

    const { text } = body 

    const index = comments.findIndex((comment)=>comment.id === parseInt(id))

    comments[index].text = text 
    
    return Response.json(comments[index])

}

export async function DELETE(request , context){
    
    const { id } = await context.params 

    const index = comments.findIndex((comment)=>comment.id === parseInt(id))
    const deletedComment = comments[index]
    comments.slice(index , 1)
    return Response.json(deletedComment)

}