we can make the SSr and CSr both 
ssr means ke request phele aapke browser se jayege and server par html page generate hoke vo aapko bhej dega on the frontend 
csr matlab ke directly aapko show kar dega on the front end 

hum log ssr ko ko esliye use karte hai taki vo humko SEO provdie kare 
ssr se hum faster initial load karva skte hai of the site 

the comp is prerendered bfore it reaches the browser so it is a SSR 

we can use the head tag to add the title and the meta data in the page 

so we have to make the routes inside the app dir 

by default all the comp are the server comp means ke vo aapki file read kar skrte hai , access the data base but client sid eme kaam nhi kar skte means we cannot use hooks and provide the interactivity to them 

each file can have their own layouts in the dir so that unki styling bhi aa jaye us page  me 
if the page or route is not found we can make out own cusom 404 page 
make this in the root one only 


dynamic routes ke lie we need to make the [] folder and us slug ko use karne ke lie we can use the params 

we can pass the content to the server by using the server actions so forlm ka data on submitting aapek srver par ja skta hai and we can get that 
<!-- make the routes insdie the app dir only to make the routes  -->

we can get the content from the form in the fomr of the api ke through ya fir we will use the server actions in it 
middleware ko config karne ka matlab yeah hai ke jab bhi aapke req aa rhe hogi uso me  odify karkek kuch aur bhi show kar skta hu 
maglab i can change the req by usging the middleware to uske lie bas ek middleware ke file bana lo and usme hum kuch redirect  ya fir rewrite ke methods use kar skte hai jiska matlab hai ke Nextrepsosne ka istemala karke hum req kon modify kar skte hai 

next ke andr by default we have the server comp jo ke aapek server side par chalte hai 

rememer one thing that 








server comp apake hooks ko use nhi kar parte aur na he interactiviity provide kar parte hai 
by using the client hum vo de skte hai and server par aap data fetch karva skte hai ya for database se connection karva skte hai 
yeah sare kaam aapke server comp karte hai 

so server comp esliye useful hai ke hum server se related kaam kar ske
as esliye ke humare jo hooks hai vo aapleclient side kaam karte hai na ke server side 
so interactivy provide karne ke lie ya fir hooks use karne ke lie we have to use the client side  

sare cheez humko app folder me dalni hoti hai taki vo accessible ho 
ssr aapka comp prerendered hoke aata hai from the server 
csr me aapke page ke rendering aapke browser me htoi hai jabki ssr me aapke page phele aapke serevr ka=e [pass jayega and vaha se html me render hoke fir browser par displsy hoga jisse uska initial load fast hot ahai and and SEO bhi increase hoga ] so by default to humara sab ssr he hai and agar aapko interactivit and hooks use karne hai to make the use client 

not-found vlai vali aapke app me banege and middleware ka use karne ke lie usko root me bana do 
matlab aapi rew aane ko abad vo uso modify karke kuchaur de dega 
humare middleware.js file aapke outrtmost level par create hogi do make the file outside the app not insde as vo aapke bahar banege 

jab bhib req aa rhe hoti hai to hum cookoes ko bhiset and bhej skte hao jo ke aapke client side me save ho jayege 

jab bhi me /about page ko mangta hu to vo mere req hoti hai eska matlab yeah hai ke me us req ko get karkek usm emodifivaion kar skta huand usko redirect  ya fir rewrite kar skta hu using the nextResposne


dynamic routing ke lie we have to use the [] and eske ander ka jo bhi hoga esko page par use karne ke lie we can use the {params}
<!-- for the dynamic routes ke lie we have to isue the []  and koi bhi ho skta hai -->

eroror ke ane par page kuch aur dikhana hai to vo dikhega and agar page he found nhi hua then aapka 404 vala page show hoga 


ki bhi thing sare page par lagana ahi to we will add in the root layout matlab ke i can make my own layout page for the diff pages as well uspa raapke root ka layout to ayega he + aapne jo alag se dala tha vo bhi ayega 


now we will work with the api ke api matlna ke backend ka code we will be writing in it 
aab hum backend ka code likehege jisme hum data ko get kar skte hai from the form 
so matlab ab hum backend ko dekhege ke backend ka code kaise lijhte hai matlab how can we get the data from the input field inton the backend 

api bana skfte ho means ke hum req bhejege and vo response me kuch dega from the server so yeah sara code aapke backend ka hai 
humare pass route.js hai jo ke ek specail file hai jo ke sare req ko handle karne ka kaam karte hai ke agar jo bhi type ke req espar aye to vo espar jaye 

api ka matlab yeha hai jek me khud ke api bana sku ke jab bhi aapka program koi bhi req bhej eto me usko response me kuch bhej sku to basically im using the server side code 
pai ko call karne par vo aapko resposne me deta hai from the requestes request so vo hm api ke through handle kar skt ehai 
yeah jo route.js hoti hai vo ek speacil file hoti hai jo ke yeah sae req ko tackle karti hai 


so jo bhi data hum body me likhege inside the fetch rewq so click karne par vo req server ke pass jayege and vo resposne me humko json dega and badle me agar bosdy me kuch hoga to vo hum le skte hai in htr server whoch will be in the request 


dynamci routes ko apne program me use karne ke lie we can use the params obejc t jiske ander vo dynamci route hoga 

server actions 
agar aapko data ko api ke through route kakre servr tak pauchana hai to post req marke vaha par request ke nade r data ko le skte hai api/add me rewq marne hai to fetch the data and body ke ander aapek form ka data ko pass kar dena hai 
esse aapka data server par aa jayega and yaha se humne apna data ko body me dalke bhej dia hai 

this thing can be done by using the server actions jaha par hum apan code in the client me he likh dete hai 
form aapka intetactive chezz hai to uske lie humkko use client ko use karna pdta hai so we need to use the use client for that but kya hota sab ek he page par aa jaye to uske lie we can use the server actions jo ke aapke client par he use karke hum kar skte hai 


by using the server action hum apne clien side rkhe he server ka code likh skte hai to aap php type ka kaam kar skte hai 
humm apne server actions ko ek folder me rkhte hai proper tareke se taki vaha ek designated jagah mile uskok 

<!-- next ke ander server  -->
server actions ka matlab hota hai ke we are writng the server code int he same section where humen aapna client code bhi likh rkha ho to matlab yeah hoga ke hum apne form ke data ko api ke through routee akrva ke bhi bhej skte hai as well as we can aslo use the server actuins 
by this we can submit the form data etither by api routes or by the server actions 

server action me hum form me ek funcionde dete hai jo ke aapka aaction hota hai and jab bhi vo function chalega then 













