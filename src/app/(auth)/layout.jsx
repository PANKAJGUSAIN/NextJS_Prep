

export default function Layout({ children }) {
  return (
        <>
        <div className="font-black text-2xl bg-orange-500 w-full h-[200px] mb-2 flex items-center justify-center">Header - for Marketing layout</div>
        <div>
          {children}
        </div>
        <div className="font-black text-2xl  bg-orange-900 w-full h-[200px] mt-2 flex items-center justify-center" >Footer - for Marketing layout</div>
        </>
  )
}
