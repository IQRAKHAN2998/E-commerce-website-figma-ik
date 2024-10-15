
// import Head from "next/head";
import Link from "next/link";

export default function Header() {
    return (
            
                <header className="fixed top-0 left-0 w-full ">
                    <div className="flex justify-around bg-white mt-5  ">
                        <div className="text-lg font-bold">
                            <h1>GREENMIND</h1>
                        </div>
                        <div >
                            <nav className="space-x-4 ">
                                <Link href="/" className=" hover:bg-green-200 rounded-lg p-2">Home</Link>
                                <Link href="/#products" className=" hover:bg-green-200 rounded-lg p-2">Products</Link>
                                <Link href="/#contact" className=" hover:bg-green-200 rounded-lg p-2">Contacts</Link>
                            </nav>
                        </div>
                      
                        <div className="border-4 px-4 border-black">
                            <button><label>search</label></button>
                        </div>
                    </div>
                </header>
    )
}