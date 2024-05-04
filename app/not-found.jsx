// here we can make the custom 404 page 
import React from 'react'
import Image from 'next/image'
const notfound = () => {
  return (
  
  
  
    <div>
      <h1>404 - Page Not Found</h1>
      <Image src="/404.png" alt="404" width={500} height={500} />
    </div>
  )
}

export default notfound


// so here we can make the custom 404 page jo ke hum show kar ske 
// custom 404 page jo ke jab page na mile tab use karna hai inside the app folder