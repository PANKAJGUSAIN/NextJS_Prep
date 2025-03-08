"use client"


import { useRouter } from "next/navigation";

export default function order(){
    const router = useRouter();
    const handleOrder = () =>{
        router.push('confirm');
        //router.replace('confirm');
        
    }
    return (
        <>
            ORDER 
            <br/>
            <button className="h-[40px] w-40px] bg-amber-600 rounded-2xl p-[10px]" onClick={handleOrder}>ORDER NOW </button>
        </>
    )
}