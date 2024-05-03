// "use client"
import Image from "next/image";
// import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      

      <h1>Welcome to Next.js!</h1>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={72}
        height={16}
      />
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
