import Image from "next/image";

export default function About() {
    return (
        <main>
        {/* about-us */ }
        < div >
     <div className="text-center mt-10">
       <h1 className="text-black text-3xl font-bold">About us</h1>
       <h2 className="text-gray-700 m-2">Order now and appreciate the beauty of nature</h2>
     </div>

     <div className="flex justify-around m-10  bg-green-200 pt-10 pb-10 rounded-md sm:flex-row flex-col items-center ">
       <div className="ml-6"><Image src="/plant3.png" alt="plant" width={100} height={90} className="border-2 rounded-full grid sm:grid-cols-1 " ></Image>
         <div className="mt-5">
           <h2 className="font-bold">Large Assortment</h2>
           <h3 className="text-gray-500 items-start"> we offer many different types of products <br /> with fewer variations in each category .</h3>
         </div>
       </div>
       <div ><Image src="/shipping.png" alt="plant" width={100} height={100} className="border-2 rounded-full bg-green-200 grid sm:grid-cols-1"></Image>
         <div className="mt-5">
           <h2 className="font-bold">Fast and Free Shippping</h2>
           <h3 className="text-gray-500">4-day or less delivery time , free shipping <br /> and an expedited delivery option.</h3>
         </div>
       </div>
       <div><Image src="/phone.png" alt="plant" width={100} height={100} className="border-2 rounded-full "></Image>
         <div className="mt-5">
           <h2 className="font-bold">24/7 Support</h2>
           <h3 className="text-gray-500">answers to any business related inquiry <br />24/7 and in real-time.</h3>
         </div>
       </div>
     </div>
   </div >
   </main>
)
}