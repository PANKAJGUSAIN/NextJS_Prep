export async function ProductsComponents(){
    await new Promise((resolve , reject)=>{
        setTimeout(() => {
            resolve()
        }, 2000);   
    })

    return <div>Products</div>
}