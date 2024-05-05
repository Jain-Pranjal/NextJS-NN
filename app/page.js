"use client"
// this is the server comp jiske ander hum client comp use kar rahe hai jaie navbar usko jum apne server comp ke ander use kar rahe hai
import Image from "next/image";
// import { cookies } from "next/headers";
// import Head from "next/head";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import submitAction from "@/actions/form";
// import { Passero_One } from "next/font/google";
// import fs from "fs/promises";
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

  // earlie rhum server ko data bhejne ke lie api ka use karte the ke api call me body ke ander vo data ko bhej ske lekin aab hum server actions ka use kar skte hai 

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



  //hum log data ko api ke through route kakre bhib bhej skte hai jisse vo aapke server par datas tore kar dega  

  // form submission in ealrier days kehum api ke triugh route karva ke uskon data send kar dete the 
  const submitAction = async (e) => { 
    // e.preventDefault();
    const name = e.target.name.value;
    const role = e.target.role.value;
    const age = e.target.age.value;
    const res = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, role, age }),
    });
    const data = await res.json();
    console.log(data);
  }

// now mw apne server vale kaam yaha par kar skta hu insid the server action
// const serverAction=async (e)=>{
//   "use server"
//   // fs.writeFile("data.txt","pranjal was here")
//   console.log(e)

// }

// for to bas mene api call he lagaya jisko mene fetch kara and bodyv ke ander data jo mene form se liya tha vo send kar dia us api me 

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
      <button onClick={getbutton}>Click to fetch GET</button> <br />


{/* yaha par mene  */}
{/* action ko ek functin bana do  */}
      <form action={submitAction}>
        Name<input type="text" name="name" id="name"  className="my-3 text-black"/><br />
       Role <input type="text" name="role" id="role" className="my-3 text-black" /><br />
        Age<input type="text" name="age" id="age"  className="my-3 text-black"/><br />
         <input type="submit" value="Submit"/>
      </form>
    
    </div>
  );
}

// hum server actions ko karne ke lie ek alag file bana lete hai and then wee iimport them as yaha par hum client side kaam kar rhe hai 
// but now we will be usinfg using the server actions in it 
// and api ke through vo data apki request me hoga jisko hum get kar skte inside a variable and then we can use that data to do the further operations

// i can use the server comp inside the client easly jo ke aapka user kabhi dekh he nhi payega so it is a good practice to use the server side comp inside the client side comp
// jo bhi data hum body me denge vo aapko server par send ho jayega and server se hum request bhejenge and server se hum response recieve karenge


// server actions matlanb ke aap client side me he server par kaam kar skte hai 

// we can submit the form by the use of th eapi routes using the post request
// fomr submit karne ke lie byt he api method we can send the data to the server and server will handle the data and send the response back to the client
/**
 * 
import { useState } from 'react';

// ...

const [name, setName] = useState('');
const [role, setRole] = useState('');
const [age, setAge] = useState('');

const handleSubmit = async (event) => {
  event.preventDefault();
  
  const res = await fetch("/api/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, role, age }),
  });
  
  const data = await res.json();
  console.log(data);
}

return (
  <div>
    <Navbar/>
    <h1>Welcome to Next.js!</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Role" />
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
      <button type="submit">Submit</button>
      </form>
      <Image src="/vercel.svg" />
      </div>
    );
    */


    // phele hum apib ke thrugh apne form ke data ko server par bhej skte the lekin aab hum use kart ehai server action ka 