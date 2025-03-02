import './index.css';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className='h-screen w-screen p-0 m-0'>
        <>
        <div className="font-black text-2xl bg-amber-100 w-full h-[200px] mb-2 flex items-center justify-center">Header - from rootlayout</div>
        <div>
          {children}
        </div>
        <div className="font-black text-2xl bg-amber-400 w-full h-[200px] mt-2 flex items-center justify-center" >Footer - from rootlayout</div>
        </>
        </body>
    </html>
  )
}
