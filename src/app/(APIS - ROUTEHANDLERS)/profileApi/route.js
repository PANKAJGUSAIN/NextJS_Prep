import { headers } from "next/headers";

export async function GET(request){

    //way1 
    console.log("Way1" , request.headers.get("authorization"))

    //way2 
    const requestHeaders = new Headers(request.headers);
    console.log("way2" , requestHeaders.get("authorization"))

    //way3 
    const headersList = await headers();
    console.log("way3" , headersList.get("authorization"))


    
    return new Response("hello")
    
}