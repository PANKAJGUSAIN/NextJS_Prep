export default async function (props){
    const result = await props.params;
    console.log(result)
    return(
        <>
            review for Product{result.productid} and review {result.reviewid}
        </>
    )
}