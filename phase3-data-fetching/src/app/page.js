import Image from "next/image";
import Search from "./products-db/search";

export default function Home() {
  return (
    <h1>
      <Search/>
      Data Fetching
    </h1>
  );
}
