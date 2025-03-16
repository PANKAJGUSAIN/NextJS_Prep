//export const dynamic = "force-dynamic"; //to make api request every time 

export default async function userServer() {
    await new Promise((res , rej) =>{
        setTimeout(() => {
            res();
        }, 2000);
    })
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    const user = await res.json();
        console.log(user)

    return (
        <>
            <div className="container mx-auto p-4">
                {user.map((u) => (
                    <div key={u.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
                        <h2 className="text-xl text-black font-bold">{u.name}</h2>
                        <p className="text-gray-700">{u.email}</p>
                        <p className="text-gray-700">{u.phone}</p>
                    </div>
                ))}
            </div>
        </>
    )
}