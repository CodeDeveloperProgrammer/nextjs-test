import TitlePage from "@/components/TitlePage";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <TitlePage title="Home" />
      {/* <a href="/blog">Blog</a> */}
      <Link href="/blog" >Blog</Link>
    </>
  );
};
export default Home;
