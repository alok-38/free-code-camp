import Image from "next/image";

export default function Header() {
  return (
      <div>
      <h1 className="text-2xl">Hello from</h1>
        <Image
          className="mb-10 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
  );
}
