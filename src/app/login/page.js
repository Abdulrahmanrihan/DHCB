import Header from "@/components/header";
import Footer from "@/components/footer";

import devices from "../../assets/images/devices.png"

import Image from "next/image";

export default function login(){
    return (
        <main class="bg-white">
            <Header/>
            <div class="w-full mx-auto text-sm">
                <div class="flex flex-col bg-darker rounded-2xl m-12 pb-2 p-12 md:p-18 w-fit md:mx-auto ">
                    <div class="flex flex-col w-full md:w-fit text-black mx-auto">
                        <div class="mx-auto p-12">
                            <p class="text-3xl md:text-4xl text-white mb-8">Customer Login</p>
                        </div>
                        <input class="rounded-lg bg-white text-black p-2 my-2 w-2/3 mx-auto" type="text" placeholder="Username"/>
                        <input class="rounded-lg bg-white text-black p-2 my-2 w-2/3 mx-auto" type="password" placeholder="Password"/>
                        <button class="bg-blue p-2 rounded-lg my-4 w-1/3 mx-auto md:mb-16 text-white">Login</button>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 w-full">
                <Footer/>
            </div>
        </main>
    );
}