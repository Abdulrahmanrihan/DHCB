import Image from "next/image"
import Link from "next/link";
import logo from "./logo.png"

export default function Header(){
    return(
        <main>
            <div class="hidden md:flex flex-row w-full m-auto p-4 bg-dark">
                <Image class="w-44 h-16" src={logo} alt="logo"/>
                <div class="flex flex-row flex-1 justify-around my-auto">
                    <Link href="/"><button class="p-2">Home</button></Link>
                    <Link href="/products"><button class="p-2">Products</button></Link>
                    <Link href="/about"><button class="p-2">About Us</button></Link>
                    <Link href="/contact"><button class="bg-blue rounded-md py-2 px-4">Contact Sales</button></Link>
                    <Link href="/login"><button class="bg-blue rounded-md py-2 px-4">Customer Login</button></Link>
                </div>
            </div>
            <div class="flex md:hidden flex-col md:flex-row w-full m-auto p-4 bg-dark">
                <Image class="w-36 h-18 md:mx-0 mx-auto" src={logo} alt="logo"/>
                <div class="flex flex-col md:flex-row flex-1 justify-around my-auto md:text-left text-center">
                    <Link href="/"><button class="p-2 md:my-0 my-2">Home</button></Link>
                    <Link href="/products"><button class="p-2 md:my-0 my-2">Products</button></Link>
                    <Link href="/about"><button class="p-2 md:my-0 my-2">About Us</button></Link>
                    <Link class="md:my-0 my-2" href="/contact"><button class="bg-blue rounded-md py-2 px-4">Contact Sales</button></Link>
                    <Link class="md:my-0 my-2" href="/login"><button class="bg-blue rounded-md py-2 px-4">Customer Login</button></Link>
                </div>
            </div>
        </main>
    );
}