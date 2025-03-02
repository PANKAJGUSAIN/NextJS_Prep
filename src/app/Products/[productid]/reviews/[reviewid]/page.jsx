import { notFound } from "next/navigation";

export default async function (props){
    const result = await props.params;
    console.log(result)
    if( parseInt(result.reviewid) > 1000){
        notFound();
    }
    return(
        <>
            review for Product{result.productid} and review {result.reviewid}
        </>
    )
}