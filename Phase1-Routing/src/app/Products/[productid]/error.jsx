"use client"

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({ error, reset }) {
    console.log(error)
    const router = useRouter();
    const reload = () =>{
        startTransition(()=>{
            router.refresh();
            reset();
        });
    }
    return (
        <>
            <div>Error in ReviewID</div>
            <button onClick={reload}>Reset Button</button>
        </>
    )
}