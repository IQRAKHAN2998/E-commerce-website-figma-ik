import Image from "next/image"

export default function BestSelling(){
    return(
        <div className="flex  sm:flex-row flex-col items-center justify-center gap-7 mt-6 ">
        <div className="ml-10 mr-10 mt-5 " >
          <h1 className=" text-3xl font-bold ">Best Selling <br /> Plants</h1>
          <h2 className="text-gray-700">Easiest way to healthy life buying <br />
            your favorite plants</h2>
          <button className="bg-green-200 px-4 my-2 font-black"><label htmlFor="seemore" >see more</label></button>
        </div>

        <div className=" grid sm:grid-cols-1">
          <Image src="/images (2).jpg" alt="naturalplants" width={200} height={200}></Image>
          <h2 className="m-2">Natural PLants</h2>
          <h3 className="text-gray-600 m-2">P 1400.00</h3>
        </div>
        <div className=" grid sm:grid-cols-1">
          <Image src="/download.jpg" alt="artificial plant" width={200} height={200}></Image>
          <h2 className="m-2">Artificial Plants</h2>
          <h3 className="text-gray-600 m-2">P 900.00</h3>
        </div>
        <div className=" grid sm:grid-cols-1 ">
          <Image src="/images.jpg" alt="artificial plant" width={200} height={200}></Image>
          <h2 className="m-2">Artificial Plants</h2>
          <h3 className="text-gray-600 m-2">P 3500.00</h3>
        </div>
      </div>

   
    )
}