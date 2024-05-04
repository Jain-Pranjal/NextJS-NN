"use client"
import React, { useState } from 'react'
// import {fs} from 'fs/promises'
const Navbar = () => {
    const [count, setCount] = useState(0);


  return (
    <div>
        <h1>Navbar</h1>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

// so we can export the navbar component joke ek clint side component hai inside ht the server side to yeah vala comp bhi server se predender hoek ayege
export default Navbar
