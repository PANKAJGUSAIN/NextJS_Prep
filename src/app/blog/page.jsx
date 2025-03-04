

export default async function  blogRoot() {

    // adding intentional delay to test loading.jsx is working or not 
    await new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve('intenional')
        },5000)
    } )

    return <h1>Blog</h1>
}