// here we can use the nextresponse an duske methods 
import { NextResponse } from 'next/server'
 
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    const requestHeaders = new Headers(request.headers)

    const response = NextResponse.next({
        request: {
          // New request headers
          headers: requestHeaders,
        },
      })
     
      // Set a new response header `x-hello-from-middleware2`
      response.headers.set('x-hello-from-middleware2', 'hello')
    
    return NextResponse.rewrite(new URL('/', request.url))
  }

//   so rewrite ka matlab yeah hai ke /about par url me to chnage hoga lekin vo / par redirect nhi hoga vo /about par he rahega
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/contact', request.url))
  }
}

// eske ande matcheer ka use jkar rhe hai jo ke ek path hai jo ke humne define kiya hai and uske ande humne ek path define kiya hai jo ke humne use kiya hai
// we can aslo ise the consitional statemtn in the middleware 

// so nextresponse karvae ke liehum redirect ya fir rewrite ka istemal kar skte harewrite me url to same he rehega lekin vo aapko redirect new mw kar dega 
//  