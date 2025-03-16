"use client";

import { useEffect, useState } from "react";

export default function UserClient(){
    const [user , setUser] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState("");

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setUser(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    },[])

    return(
        <>
        {
            loading ? (
                <div className="text-center text-gray-500">Loading...</div>
            ) : (
                <div className="container mx-auto p-4">
                    {user.map((u) => (
                        <div key={u.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
                            <h2 className="text-xl text-black font-bold">{u.name}</h2>
                            <p className="text-gray-700">{u.email}</p>
                            <p className="text-gray-700">{u.phone}</p>
                        </div>
                    ))}
                </div>
            )
        }
        {error && <div className="text-red-500 text-center mt-4">{error}</div>}
        </>
    )
}