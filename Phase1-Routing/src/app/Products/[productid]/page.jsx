import { notFound } from "next/navigation";

export const generateMetadata = async(props) => {
    const result = await props.params
    const title = await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(`iphone ${result.productid}`)
          }, 2000);     
    })
    return {
        title : `Product ${title} - ${result.productid}`
    }
}


export default async function productid(props){
    const fetchedparams = await props.params ;
    console.log(fetchedparams)  // op : {productid: '120'}

        if( parseInt(fetchedparams.productid) > 999){
            notFound();
        }

    return (
        <>
            Product {fetchedparams.productid} details
        </>
    )
}