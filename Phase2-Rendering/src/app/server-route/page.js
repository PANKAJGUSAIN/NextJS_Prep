import ImageSlider from "@/components/ImageSlide";
import { serverSideFunction } from "@/utils/serverutils";

export default function ServerRoute(){
    const result = serverSideFunction();
    // const result2 = ClientSideFunction();
    return (
        <>
            <h1>Server Route-{result}</h1>
            <ImageSlider/>
            
        </>
    )
}