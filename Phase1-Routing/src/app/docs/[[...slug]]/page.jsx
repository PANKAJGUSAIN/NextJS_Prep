export default async function docsnestedcomponent(props){
    const fetchparams = await props.params
    console.log(fetchparams)
    return (
        <>  
            hello {JSON.stringify(fetchparams.slug)}
        </>
    )
}