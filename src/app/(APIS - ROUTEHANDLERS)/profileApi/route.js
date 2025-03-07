import { cookies, headers } from "next/headers";

export async function GET(request){


    //headers

    //way1 
    console.log("Way1" , request.headers.get("authorization"))

    //way2 
    const requestHeaders = new Headers(request.headers);
    console.log("way2" , requestHeaders.get("authorization"))

    //way3 
    const headersList = await headers();
    console.log("way3" , headersList.get("authorization"))


    //cookies

    //way1
    const theme = request.cookies.get("theme");

    //way2
    const cookieStore = await cookies();
    cookieStore.set("resultsPerPage" , 20);
    console.log("way1" , cookieStore)

    console.log("cookie theme " , theme)

    



    return new Response("<h1>hello</h1>" , {
        headers :{
            "Content-Type":"text/html",
            "Set-Cookie":"theme=dark"
        }
    })
    
}