// route.js is the speacial file jiske ander hum apne sare req ko tackle karte hai ke jab bhi kise bhi type ke req aye to yaha se hum usko server ke dwara response bhej ske 
import { NextResponse } from "next/server";
// so baucallyhum kise bhi type ke req mare to yaha se hum tackle kar skte hai by sending the resonse to that req so basically humme ek 

// making the post method api 
// jo data form se saa rha hai vo aapki request me hai so usko get karne ke lie hum request ko access karege 
// me request se data ko get kar skta hu jo ke mene apne body me dale bheja tha to the server
export async function POST(request) {
    const data= await request.json()
    console.log(data)
}

// server par data hum body ke ander dal ke bhejte hai to koi bhi data ko agar humkobhejna hai to hum bodyv ke ander dal ke bhj skt ehai 



// so ab koi bhi post req marega to usko yeah response milega in json format 
// jab bhi koi posr req marega to usko response milega in the json format 

export async function GET(request) {
    return NextResponse.cookie({ name: "name", value: "John Doe" });
    // return NextResponse.json({ message: "GEt ke req hai !" ,status:200});
}

// we have created our own api jo ke aapko response degi so we can make th eapi in the next js by api/add and then route.js jo ke ek specail file hai api banne ke lie y
// yaha par hum sare req ke routes likhte hai ke agar kabhi bhi req bheje to kya hona chaiye and kya response aana chaiye so basically yaha par hum apne req ko handle kar skte hai
// yeah sara code aapek server side chal rha hai so we are makeing the req to an api from th eserver side and server aapko response me de rha hai
