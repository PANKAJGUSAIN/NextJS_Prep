export const dynamicParam = false ;

export async function generateStaticParams(){
    return [{id:"1"} , {id:"2"} , {id:"3"}];
}

export default async function name(props) {

    const { id } = await props.params;

    return (
        <>
            <h1>
                Product { id } details rendered at { new Date().toLocaleTimeString()}
            </h1>
        </>
    )
    
}