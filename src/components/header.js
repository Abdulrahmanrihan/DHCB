import Image from "next/image"
import logo from "./logo.png"

export default function Header(){
    return(
        <main class="flex flex-row w-full m-auto p-4 bg-dark">
            <Image class="w-44 h-16" src={logo} alt="logo"/>
            <div class="flex flex-row flex-1 justify-around my-auto">
                <a href="/"><button class="p-2">Home</button></a>
                <a href="/prodcuts"><button class="p-2">Products</button></a>
                <a href="/about"><button class="p-2">About Us</button></a>
                <a href="/contact"><button class="bg-blue rounded-md py-2 px-4">Contact Sales</button></a>
                <a href="/login"><button class="bg-blue rounded-md py-2 px-4">Customer Login</button></a>
            </div>
        </main>
    );
}