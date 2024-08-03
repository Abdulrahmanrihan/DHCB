import Link from "next/link";

export default function FooterTop(){
    return (
        <main>
            <div class="flex flex-col md:flex-row p-12 bg-darker">
                <div class="flex flex-col w-full md:w-1/2 text-white">
                    <h1 class="text-4xl md:text-6xl font-bold">Get Started for free</h1>
                    <p class="my-4 font-light">Try DHCB for as long as you like with our free Starter plan.<br/> host, and unlock additional features.</p>
                    <Link href='/contact'><button class="bg-blue text-white rounded-sm py-3 px-4 w-fit"><span class="font-bold">Get started</span> - it&apos;s free</button></Link>
                </div>
                <div class="flex flex-col md:flex-row w-full md:w-1/2 md:p-8 text-gray justify-around md:my-0 my-6">
                    <div class="flex flex-col md:my-0 my-6">
                        <p class="font-bold text-white mb-1">Our work</p>
                        <a href="/construction"><p class="my-1">Phone tech</p></a>
                        <a href="/construction"><p class="my-1">Web tech</p></a>
                        <a href="/construction"><p class="my-1">Tech integration</p></a>
                        <a href="/construction"><p class="my-1">Online stores</p></a>
                        <a href="/construction"><p class="my-1">Automation</p></a>
                        <a href="/construction"><p class="my-1">Custom tech</p></a>
                    </div>
                    <div class="flex flex-col md:my-0 my-6">
                        <p class="font-bold text-white mb-1">Company</p>
                        <a href="/construction"><p class="my-1">About</p></a>
                        <a href="/construction"><p class="my-1">Careers</p></a>
                        <a href="/construction"><p class="my-1">Privacy Policy</p></a>
                    </div>
                </div>
            </div>
            <hr/>
        </main>
    );
}