// by default it is a server side comp so we can get this valiue as this 
import React from 'react'

const page = ({params}) => {
  console.log(params)
  return (
    <div>
      this is the blog number {params.id}
    </div>
  )
}

export default page

// so i can access this parameter as dynamic parameter and then use it in the page 


// now jo id hai vo ek dynamic parameter hai jo ke humne use kiya hai and usko agar data me access karna hai so we cna use the params object
// params object me hume dynamic parameter mil jata hai jo ke humne use kiya hai so it is an object jisme vo dynamic parameter hai 

// also we can get all the segemnts inside the page as an array so we can use the spread operator to get all the segments as an array
// so just we need to use the [...params] to get all the segments as an array

