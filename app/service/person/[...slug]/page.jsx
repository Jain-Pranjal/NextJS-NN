// as this is the sever side rendering wee can see the dynamic parameter in the url and then use it in the page
import React from 'react'

// params is the object that is passed to the page component by the router 
// so we can get the dynamic parameter from the params object es param object ke ander vo dynamci value hoti haijo ke humne use ki hai inside the url 
const page = ({params}) => {
    console.log(params);
    if(params.slug[0] === 'admin'){
        return (<h1>admin page</h1>)


    }
    else{
      return (
        <div>
          hello i m the operator number {params.slug}
        </div>
      )
    }
}

export default page


// aslo we can get catch all the segments of the url by using the spread operator in it 
// just make the [...slug ] now we will be able to get all those value inside the slug array
// we will get the array in it 
// now we will get the multiple value of the slug inside the array in the dynamci route 
// as we get the array isnide the slug so we can access the value of the slug by using the index of the array 

// custom 404 page apke app ke ander banega not in the rot folder 
