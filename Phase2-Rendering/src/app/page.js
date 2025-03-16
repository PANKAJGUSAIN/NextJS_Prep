import Link from "next/link";


export default function Home() {
  return (
    <>
      <Link href='/dashboard'>Dashboard</Link> 
      <Link href='/About'>About</Link>  
    </>
  );
}
