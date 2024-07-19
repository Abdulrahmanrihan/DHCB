import Header from "@/components/header";
import Footer from "@/components/footer";

import devices from "../../assets/images/devices.png"

import Image from "next/image";

export default function login(){
    return (
        <main class="bg-white">
            <Header/>
            <div class="flex flex-col md:flex-row bg-darker rounded-2xl md:p-12 md:m-12 m-6 p-8">
                <div class="flex flex-col w-full md:w-1/2 md:mx-16">
                    <p class="text-4xl md:text-5xl text-gray mb-2">Welcome</p>
                    <p class="text-4xl md:text-5xl text-white mb-8">We are glad to see you back</p>
                    <input class="rounded-lg bg-white text-black p-3 my-2" type="text" placeholder="Username"/>
                    <input class="rounded-lg bg-white text-black p-3 my-2" type="password" placeholder="Password"/>
                    <button class="bg-blue p-3 rounded-lg my-4">Next</button>
                    <div class="flex flex-col md:flex-row justify-between my-2">
                        <hr class="border border-white md:w-1/4 my-auto"/>
                        <p class="text-white text-center my-3 md:my-auto md:text-md text-xs"><span class="font-bold">Login</span> with others</p>
                        <hr class="border border-white md:w-1/4 my-auto"/>
                    </div>
                </div>
                <div class="flex flex-col w-full md:w-1/2">
                    <Image class="my-6 md:my-auto mx-auto" src={devices} width={350} height={350}/>
                </div>
            </div>
            <Footer/>
        </main>
    );
}