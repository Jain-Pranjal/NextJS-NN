"use client"
// this is the server comp jiske ander hum client comp use kar rahe hai jaie navbar usko jum apne server comp ke ander use kar rahe hai
import Image from "next/image";
// import Head from "next/head";
import Navbar from "@/components/Navbar";
import Link from "next/link";
export default function Home() {

  // basically apni req me specify karna hota hai ke kis type ke req hai post ya get by default ge tke hoti hai 
  const handleclick = async () => {
    const res = await fetch("/api/add", {  //specify the method ke kis type ke req hai 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "PRanjal jain",role:"coder",age:"22" }),
    });
    const data = await res.json();
    console.log(data);
  }

  //body me jobhi data likehege vo hum server ko bhejenge and server usko handle karega and response bhejega

  const getbutton = async () => {
    const res = await fetch("/api/add", {  //specify the method ke kis type ke req hai 
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ name: "John Doe" }),
    });
    const data = await res.json();
    console.log(data);
  }

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

      <h1>Post req handling</h1>
      <button onClick={handleclick}>Click to fetch POST</button> <br />
      <button onClick={getbutton}>Click to fetch GET</button>

    </div>
  );
}


// i can use the server comp inside the client easly jo ke aapka user kabhi dekh he nhi payega so it is a good practice to use the server side comp inside the client side comp
// jo bhi data hum body me denge vo aapko server par send ho jayega and server se hum request bhejenge and server se hum response recieve karenge
