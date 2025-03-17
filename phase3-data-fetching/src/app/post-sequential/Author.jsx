export default async function Author({userId}){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user =    await  res.json();

    return (
        <div>
            <h2>Written by: {user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
        </div>
    )
}