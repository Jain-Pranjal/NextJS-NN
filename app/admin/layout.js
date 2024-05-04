// this is the gloabl layout of the page here hum jo bhi dnege vok apake sare pages par render ho jayege 
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// const inter = Inter({ subsets: ["latin"] });
import Footer from "@/components/Footer";
export const metadata = {
  title: "Login page",
  description: "admin login page",
};

// this page ka content aapke sare pages me common hoga so this will hav the same for all the pages 

export default function Admin({ children }) {
  return<>
          {/* barbar there is no need to ad the html page just add the children there 
          html to usko bahar vale layout me se mil he jayega  */}
   {children}
   <Footer />
  </>
}


// so admin layout ke ander vo aapko children to dega he + footer bhi dega

// yeha vala layout me change swill be only in admin ke endpoints yeah root me nhi honge 
// also we can group th ecommon folder inside the () so that hiunko ek sath render kar sake and bar bar likhna nhi padega indoe the url 


