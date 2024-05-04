// route.js is the speacial file jiske ander hum apne sare req ko tackle karte hai ke jab bhi kise bhi type ke req aye to yaha se hum usko server ke dwara response bhej ske 
import { NextResponse } from "next/server";
// so baucallyhum kise bhi type ke req mare to yaha se hum tackle kar skte hai by sending the resonse to that req so basically humme ek 
export async function POST(request) {

    // yaha par body se req aye hai jo bhi mene body me dia tha usko me yaha par request me se get kar skta hu 
    let data=await request.json();
    console.log(data);
    return NextResponse.json({ message: "Hello, World!" ,status:200,data:data});
    
    // ab koi bhi post req marega to usko server se yeah response milega
}

// so ab koi bhi post req marega to usko yeah response milega in json format 
// jab bhi koi posr req marega to usko response milega in the json format 

export async function GET(request) {
    return NextResponse.json({ message: "GEt ke req hai !" ,status:200});
}

// we have created our own api jo ke aapko response degi so we can make th eapi in the next js by api/add and then route.js jo ke ek specail file hai api banne ke lie y
// yaha par hum sare req ke routes likhte hai ke agar kabhi bhi req bheje to kya hona chaiye and kya response aana chaiye so basically yaha par hum apne req ko handle kar skte hai
// yeah sara code aapek server side chal rha hai so we are makeing the req to an api from th eserver side and server aapko response me de rha hai
