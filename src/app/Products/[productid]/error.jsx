"use client"

export default function ErrorBoundary({error}){
    console.log(error)
    return (
        <div>Error in ReviewID</div>
    )
}