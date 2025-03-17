
async function getUserPost(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    const posts = await res.json();
    return posts
}

async function getUserAlbums(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
    const albums = await res.json();
    return albums
}

export default async function UserProfile(props) {
    const { id } = await props.params;

    const postsData = getUserPost(id);
    const albumsData = getUserAlbums(id);

    const [posts , albums ] = await Promise.all([postsData ,albumsData]);

    return(
        <>
            <div className="flex">
                <div className="w-1/2 p-4">
                    <h2 className="text-xl font-bold mb-4">Posts</h2>
                    {posts.map(post => (
                        <div key={post.id} className="mb-4">
                            <h3 className="text-lg font-semibold">{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    ))}
                </div>
                <div className="w-1/2 p-4">
                    <h2 className="text-xl font-bold mb-4">Albums</h2>
                    {albums.map(album => (
                        <div key={album.id} className="mb-4">
                            <h3 className="text-lg font-semibold">{album.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

    
}