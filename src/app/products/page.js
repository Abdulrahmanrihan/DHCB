import Header from "@/components/header";
import Footer from "@/components/footer";

import Image from "next/image";

import appleWatch from "../../assets/images/appleWatch2.png"
import screenshot1 from "../../assets/images/screenshot1.png"
import screenshot2 from "../../assets/images/screenshot2.png"


export default function products(){
    return (
        <main class="bg-white">
            <Header/>
            <section class="md:p-24 p-16 bg-darker flex md:flex-row flex-col">
                <div class="flex flex-col md:w-1/2 w-full">
                <h1 class="text-gray md:text-5xl text-3xl">EFFECIENCY</h1>
                <h1 class="font-bold text-white md:text-5xl text-3xl">Save resources</h1>
                <p class="text-light-gray mt-8 mb-4">Your time is precious let's optimize for it</p>
                <a class="my-10" href="/contact"><button class="bg-blue rounded-md py-2 px-4">Contact Sales</button></a>
                <a class="text-gray text-xs md:mb-0 mb-12" href="/about">LEARN MORE ABOUT EFFECIENCY</a>
                </div>
                <div class="flex flex-col md:w-1/2 w-full">
                    <Image class="mx-auto my-auto" src={appleWatch} width={100} height={50}/>
                </div>
            </section>
            <section class="flex flex-col md:p-12 p-8 bg-white">
                <h1 class="text-3xl md:text-4xl text-center md:mt-24 mt-16 mb-24 text-black">Effeciency highlights</h1>
                <div class="flex md:flex-row flex-col">
                    <Image class="md:w-1/2 w-full" src={screenshot1} width={500} height={500}/>
                    <div class="flex flex-col md:p-12 md:my-0 my-12">
                        <p class="text-gray text-2xl mb-2">Business dashboards</p>
                        <p class="text-light-gray">Pipelines that power up operations, track sales, maximize customer satisfaction, etc.</p>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row md:mt-44 mt-12">
                    <div class="flex flex-col md:p-12">
                        <p class="text-gray text-2xl mb-2">Integrations powered with AI</p>
                        <p class="text-light-gray">Generative solutions, APIs, third-party software utility and more</p>
                    </div>
                    <Image class="w-full md:w-1/2 md:my-0 my-12" src={screenshot2} width={500} height={500}/>
                </div>
            </section>
            <hr class="border border-light-gray md:my-24 my-8"/>
            <section class="md:my-12 md:mx-24 bg-white ">
                <div class="bg-darker p-8">
                    <p class="text-white text-xs mb-4">WANT TO START?</p>
                    <p class="text-white text-xl mb-4">Get in touch with DHCBs Boost your web presence team.</p>
                    <p class="text-white font-bold text-xs">Contact us</p>
                </div>
            </section>
            <hr class="border border-gray md:my-24 my-8"/>
            <Footer/>
        </main>
    );
}