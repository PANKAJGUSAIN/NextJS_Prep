export async function Reviews(){
    await new Promise((resolve , reject)=>{
        setTimeout(() => {
            resolve()
        }, 4000);   
    })

    return <div>reviews</div>
}