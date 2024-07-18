import Header from "@/components/header";
import Footer from "@/components/footer";

import appleWatch from "../../assets/images/appleWatch2.png"

export default function products(){
    return (
        <main>
            <Header/>
            <section class="p-24 bg-darker flex flex-row">
                <div class="flex flex-col w-1/2">
                <h1 class="text-gray text-5xl">EFFECIENCY</h1>
                <h1 class="font-bold text-white text-5xl">Save resources</h1>
                <p class="text-light-gray mt-8 mb-4">Your time is precious let's optimize for it</p>
                <a class="my-10" href="/contact"><button class="bg-blue rounded-md py-2 px-4">Contact Sales</button></a>
                <a class="text-gray text-xs" href="/about">LEARN MORE ABOUT MAKE</a>
                </div>
                <div class="flex flex-col w-1/2">
                    <Image src={appleWatch} width={200} height={200}/>
                </div>
            </section>
            <Footer/>
        </main>
    );
}