import Image from "next/image";
import LikeButton from "../components/LikeButton";
import Header from "../components/Header";
import Programmers from "../components/Programmers"

export default function Home() {
  return (
    <main className="flex flex-col">
      <Image
        className=" mx-auto mt-10 mb-10 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      ></Image>
        <Header title="Develop. Preview. Ship." />
        <Programmers />
        <LikeButton />
    </main>
  );
}
