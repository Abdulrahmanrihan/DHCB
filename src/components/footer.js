import Link from "next/link";
import logo from "./logo.png"
import Image from "next/image";

export default function Footer(){
    return(
        <main class="flex flex-col bg-darker md:px-8 md:pb-2">
            <div class="flex flex-row px-6 justify-between mt-2">
                <p class="text-gray md:my-auto text-xs md:w-1/3 my-6 md:mx-0 mx-auto">© 2024 DHCB, Inc. All rights reserved</p>
                <Image class="md:flex hidden" src={logo} width={150} height={0}/>
                <div class="w-1/3 text-center my-auto md:flex hidden">
                    <a class="mx-auto" href="https://www.linkedin.com/company/dhcb"><svg xmlns="http://www.w3.org/2000/svg"  height={20} width={20} viewBox="0 0 448 512"><path fill="#5A5A5A" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
                </div>
            </div>
        </main>
    );
}