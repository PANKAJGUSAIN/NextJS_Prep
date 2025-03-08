export default function ProductsLayout({children}){
    return (
        <>
        <div className="bg-purple-800 h-[50px] flex items-center justify-center text-white w-full"> Products Header</div>
        {children}
        <div className="bg-purple-950 h-[50px] flex items-center justify-center  text-white w-full"> Products Footer</div>
        </>
    )
}