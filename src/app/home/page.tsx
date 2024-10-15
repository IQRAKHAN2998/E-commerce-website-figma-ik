import Image from "next/image";

export default function Home(){
    return(
        <main className="justify-around">
      <section >

        <div className="bg-green-200 flex justify-around gap-8 py-4 ml-10 mr-10 rounded-xl pb-10 mt-9">
          <div className="ml-11 p-6 ">
            {/* left side */}
            <h1 className="text-3xl font-bold ">Buy Your <br /> Dream Plants</h1>
            <div className="flex gap-4 py-3">
              <h2>50 + <br /> plant species</h2>
              <h3>|</h3>
              <br />
              <h2>100+ <br /> customer</h2>
            </div>
            <div className="bg-white px-9 my-3 rounded-3xl">
              <button className="text-gray-500" > <label htmlFor="What are you looking for?">What are you looking for?</label></button>
            </div>
          </div>

          {/* right side */}
          <div className="p-6">
            <Image src="/images (1).jpg" alt="handplant" width={200} height={200} className="rounded-3xl " />
          </div>
        </div>
      </section>
      </main>
    )
}