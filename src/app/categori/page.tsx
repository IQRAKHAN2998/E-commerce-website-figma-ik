import Image from "next/image";

export default function Categories() {
  return (

    <section className="pt-16 items-center ">
      {/* categories */}

      <div className="relative min-h-screen bg-white  flex lg:justify-center sm:flex-row flex-col items-center">
        {/* Green background for the lower half */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-green-100"></div>

        {/* Main content */}
        <div className="relative items-center ">
          <h1 className="text-3xl font-bold mb-4">Categories</h1>
          <p className="text-gray-500 mb-8">Find What you are looking for</p>

          {/* Cards Section */}
          <div className="flex sm:flex-row flex-col   space-x-14 ">
            {/* Card 1 */}
            <div className="bg-gray-100 p-4 shadow-lg">
              <Image src="/categori1.jpg" alt="Natural Plants" width={200} height={200} className="rounded-t-lg" ></Image>
              <h2 className="text-center font-semibold mt-4">Natural Plants</h2>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 p-4 shadow-lg mt-12  " >
              <Image src="/categori2.jpg" alt="Plant Accessories" width={200} height={200} className="rounded-t-lg"></Image>
              <h2 className="text-center font-semibold mt-4">Plant Accessories</h2>

            </div>

            {/* Card 3 */}
            <div className="bg-gray-100  p-4 shadow-lg ">
              <Image src="/categori3.jpg" alt="Artificial Plants" width={200} height={200} className="rounded-t-lg" ></Image>
              <h2 className="text-center font-semibold mt-4">Artificial Plants</h2>
            </div>
          </div>
          <p className="pt-5 ">Horem ispum dolor sit amet, <br />consectetur adipiscing</p>
          {/* Button */}
          <button className="mt-10 bg-gray-700 text-white px-6 py-2 rounded-lg lg:items-center">
            Explore →
          </button>
        </div>
      </div>
    </section>
  )
}