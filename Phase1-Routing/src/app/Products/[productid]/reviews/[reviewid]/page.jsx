import { notFound } from "next/navigation";

function getRandomInt(count){
    return Math.floor(Math.random()*count);
}

export default async function (props){
    const result = await props.params;
    console.log(result)

    // way to mimic an error 
    const random = getRandomInt(2);
    if(random === 1){
        throw new Error("Error Loading Review");
    }



    if( parseInt(result.reviewid) > 1000){
        notFound();
    }
    return(
        <>
            review for Product{result.productid} and review {result.reviewid}
        </>
    )
}