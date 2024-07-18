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
            <section class="p-24 bg-darker flex flex-row">
                <div class="flex flex-col w-1/2">
                <h1 class="text-gray text-5xl">EFFECIENCY</h1>
                <h1 class="font-bold text-white text-5xl">Save resources</h1>
                <p class="text-light-gray mt-8 mb-4">Your time is precious let's optimize for it</p>
                <a class="my-10" href="/contact"><button class="bg-blue rounded-md py-2 px-4">Contact Sales</button></a>
                <a class="text-gray text-xs" href="/about">LEARN MORE ABOUT EFFECIENCY</a>
                </div>
                <div class="flex flex-col w-1/2">
                    <Image class="align-right mx-auto my-auto" src={appleWatch} width={100} height={50}/>
                </div>
            </section>
            <section class="flex flex-col p-12 bg-white">
                <h1 class="text-4xl text-center my-24 text-black">Effeciency highlights</h1>
                <div class="flex flex-row">
                    <Image class="w-1/2" src={screenshot1} width={500} height={500}/>
                    <div class="flex flex-col p-12">
                        <p class="text-light-gray text-2xl mb-2">Business dashboards</p>
                        <p class="text-light-gray">Pipelines that power up operations, track sales, maximize customer satisfaction, etc.</p>
                    </div>
                </div>
                <div class="flex flex-row mt-44">
                    <div class="flex flex-col p-12">
                        <p class="text-light-gray text-2xl mb-2">Integrations powered with AI</p>
                        <p class="text-light-gray">Generative solutions, APIs, third-party software utility and more</p>
                    </div>
                    <Image class="w-1/2" src={screenshot2} width={500} height={500}/>
                </div>
            </section>
            <hr class="border border-light-gray my-24"/>
            <section class="my-12 mx-24 bg-white ">
                <div class="bg-darker p-8">
                    <p class="text-white text-xs mb-4">WANT TO START?</p>
                    <p class="text-white text-xl mb-4">Get in touch with DHCBs Boost your web presence team.</p>
                    <p class="text-white font-bold text-xs">Contact us</p>
                </div>
            </section>
            <hr class="border border-gray my-24"/>
            <Footer/>
        </main>
    );
}