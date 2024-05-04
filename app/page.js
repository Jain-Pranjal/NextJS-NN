// "use client"
// this is the server comp jiske ander hum client comp use kar rahe hai jaie navbar usko jum apne server comp ke ander use kar rahe hai
import Image from "next/image";
// import Head from "next/head";
import Navbar from "@/components/Navbar";
import Link from "next/link";
export default function Home() {
  throw new Error("This is a server side error")
  return (
    <div>
      
    <Navbar/>

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


// i can use the server comp inside the client easly jo ke aapka user kabhi dekh he nhi payega so it is a good practice to use the server side comp inside the client side comp