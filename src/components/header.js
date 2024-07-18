import Image from "next/image"
import Link from "next/link";
import logo from "./logo.png"

export default function Header(){
    return(
        <main class="flex flex-row w-full m-auto p-4 bg-dark">
            <Image class="w-44 h-16" src={logo} alt="logo"/>
            <div class="flex flex-row flex-1 justify-around my-auto">
                <Link href="/"><button class="p-2">Home</button></Link>
                <Link href="/products"><button class="p-2">Products</button></Link>
                <Link href="/about"><button class="p-2">About Us</button></Link>
                <Link href="/contact"><button class="bg-blue rounded-md py-2 px-4">Contact Sales</button></Link>
                <Link href="/login"><button class="bg-blue rounded-md py-2 px-4">Customer Login</button></Link>
            </div>
        </main>
    );
}