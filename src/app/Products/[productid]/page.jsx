
export default async function productid(props){
    const fetchedparams = await props.params ;
    console.log(fetchedparams)  // op : {productid: '120'}
    return (
        <>
            Product {fetchedparams.productid} details
        </>
    )
}