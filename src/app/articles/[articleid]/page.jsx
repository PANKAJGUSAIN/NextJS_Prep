import Link from "next/link"

export default async function news(props){
    const paramsresult = await props.params
    const searchparamsresult = await props.searchParams 
    console.log(paramsresult , searchparamsresult)
    return (
        <>
            Reading article {paramsresult.articleid} in language {searchparamsresult.lang}
            <div>
                <Link href={`/articles/${paramsresult.articleid}?lang=en`}>English</Link>
                <Link href={`/articles/${paramsresult.articleid}?lang=fr`}>French</Link>
                <Link href={`/articles/${paramsresult.articleid}?lang=es`}>Espenol</Link>
            </div>
        </>
    )
}