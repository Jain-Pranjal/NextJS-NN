// here we will write the server actions in it 
"use server"
import { NextResponse } from "next/server";
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

export default submitAction;

// here i will make the serever action from which i can send the data to the server and get the response from the server