import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

import ipad from "../assets/images/ipad.png";
import weblayout from "../assets/images/weblayout.png";
import dashboard from "../assets/images/dashboard.png";

import speed from "../assets/images/speed.png";
import security from "../assets/images/security.png";
import scalability from "../assets/images/scalability.png";

import infinity from "../assets/images/infinity.png"
import ecommerce from "../assets/images/ecommerce.png"

export default function Home() {
  return (
    <main class="w-full bg-white">
      <Header/>
      <section class="p-24 bg-darker flex flex-row">
        <div class="flex flex-col w-2/5">
          <h1 class="text-gray text-5xl">Make</h1>
          <h1 class="font-bold text-white text-5xl">Keep your business up to date with Tech</h1>
          <p class="text-light-gray mt-8 mb-4">Optimize your Sales, integrate AI into your
          pipelines, cut your costs, up your product, and maintain your tech stack.</p>
          <a class="my-10" href="/contact"><button class="bg-blue rounded-md py-2 px-4">Contact Sales</button></a>
          <a class="text-gray" href="/about">LEARN MORE ABOUT MAKE</a>
        </div>
        <div class="flex flex-col w-3/5">

        </div>
      </section>
      <section class="flex flex-row px-32 pt-40 pb-32">
        <div class="flex flex-col flex-1">
          <h1 class="text-dark text-4xl font-bold">All the tech you need, without management</h1>
        </div>
        <div class="flex flex-col flex-1">
          <p class="text-dark p-2">One product manager from our clients is enough for our team to drive all your tech magic. Connect us with your PM now!</p>
        </div>
      </section>
      <section class="flex flex-row p-32">
        <div class="flex flex-col w-3/5 pr-24">
          <h1 class="text-3xl text-dark font-bold">Tech on the phone</h1>
          <p class="text-dark mt-2">Our team has built enough apps for IOS and Android to power your ideas </p>
          <a class="text-gray mt-8" href="/">Get your app now</a>
        </div>
        <div class="flex flex-col w-2/5">
          <Image width={300} height={100} src={ipad}/>
        </div>
      </section>
      <section class="flex flex-row p-32">
        <div class="flex flex-col w-3/5 pr-24">
          <h1 class="text-3xl text-dark font-bold">Boost your web presence</h1>
          <p class="text-dark mt-2">increase your exposure by partnering with 
          our team on the web </p>
          <a class="text-gray mt-8" href="/">Get your website now</a>
        </div>
        <div class="flex flex-col w-2/5">
          <Image width={300} height={100} src={weblayout}/>
        </div>
      </section>
      <section class="flex flex-row p-32">
        <div class="flex flex-col w-3/5 pr-24">
          <h1 class="text-3xl text-dark font-bold">Internal pipelines</h1>
          <p class="text-dark mt-2">Automate your business operations seamlessly. DHCB enjoy bringing digital transformation in multiple forms.</p>
          <a class="text-gray mt-8" href="/">Digitally transform now</a>
        </div>
        <div class="flex flex-col w-2/5">
          <Image width={300} height={100} src={dashboard}/>
        </div>
      </section>
      <hr class="border-gray"/>
      <section class="p-32">
        <h1 class="text-6xl text-dark text-center my-6">"Hi-tech" commitment</h1>
        <p class="text-dark text-center mt-12 text-xl">DHCB's internal reference to the commitment-for-success that we promise our partners. As we expect to work with the top-notch players of different ecosystems, each and every one of our team is committed to bring the same level of grit in every piece of work.</p>
        <div class="flex flex-col">
          <div class="flex flex-row my-24">
            <div class="flex flex-col flex-1 text-center m-auto">
              <Image class="m-auto mb-2" width={60} height={60} src={speed} />
              <h3 class="font-bold text-dark mb-2 text-2xl">Speed</h3>
              <p class="text-gray"> Fastest to the markets. Fastest tech solutions.</p>
            </div>
            <div class="flex flex-col flex-1 text-center m-auto mt-6">
              <Image class="m-auto mb-2" width={40} height={40} src={scalability} />
              <h3 class="font-bold text-dark mb-2 text-2xl">Scalability</h3>
              <p class="text-gray"> Millions of users?<br/> International? <br/>
              We offer the tech. </p>
            </div>
            <div class="flex flex-col flex-1 text-center m-auto">
              <Image class="m-auto mb-2" width={60} height={60} src={security} />
              <h3 class="font-bold text-dark mb-2 text-2xl">Security</h3>
              <p class="text-gray">Built-in SSL, fully encrypted, end-to-end and on-demand internal deployment.</p>
            </div>
          </div>
          <div class="bg-darker p-8">
            <p class="text-white text-xs mb-4">HAVE QUESTIONS?</p>
            <p class="text-white text-xl mb-4">Contact our enterprise team for more details</p>
            <p class="text-white font-bold text-xs">Contact us</p>
          </div>
        </div>
      </section>
      <hr/>
      <section class="flex flex-row px-32 py-32">
        <div class="flex flex-col flex-1">
          <h1 class="text-dark text-4xl font-bold">Powerful tech stack</h1>
        </div>
        <div class="flex flex-col flex-1">
          <p class="text-dark p-2">Moore’s law: technology advancement doubles year-over-year. DHCB partners focus 100% on their operations while our team focus on integrating the latest and greatest tech</p>
        </div>
      </section>
      <section class="flex flex-row p-32">
        <div class="flex flex-col w-3/5 pr-24">
          <h1 class="text-3xl text-dark font-bold">Sell online</h1>
          <p class="text-dark mt-2">We see a lot of value in bringing our partners’ products to customers who need them.</p>
          <a class="text-gray mt-8 font-bold" href="/">Build your online store now</a>
        </div>
        <div class="flex flex-col w-2/5">
          <Image class="mx-auto" width={170} height={50} src={ecommerce}/>
        </div>
      </section>
      <section class="flex flex-row p-32">
        <div class="flex flex-col w-3/5 pr-24">
          <h1 class="text-3xl text-dark font-bold">Integrate with businesses</h1>
          <p class="text-dark mt-2">People grow together. DHCB’s integration engineering team 
          specializes in using tech to make partnerships easier.</p>
          <a class="text-gray mt-8 font-bold" href="/">Drive business value now</a>
        </div>
        <div class="flex flex-col w-2/5">
          <Image class="mx-auto" width={170} height={50} src={infinity}/>
        </div>
      </section>
      <section class="p-32 bg-beige">
        <div class="p-12 text-black">
          <h1 class="text-6xl mb-4">Ideas</h1>
          <p class="text-4xl">Discover everything you can do with your team</p>
        </div>
        <div class="flex flex-row text-dark w-full">
          <div class="flex flex-col bg-white p-6 rounded-sm w-2/5 m-2">
            <p class="text-sm font-bold mb-12">Localization</p>
            <p class="text-sm">Create fully localized experiences for site visitors around the world</p>
          </div>
          <div class="flex flex-col bg-white p-6 rounded-sm flex-1 m-2">
            <p class="text-sm font-bold mb-12">Localization</p>
            <p class="text-sm">Create fully localized experiences for site visitors around the world</p>
          </div>
          <div class="flex flex-col bg-white p-6 rounded-sm flex-1 m-2">
            <p class="text-sm font-bold mb-12">Localization</p>
            <p class="text-sm">Create fully localized experiences for site visitors around the world</p>
          </div>
        </div>
        <div class="flex flex-row text-dark w-full">
          <div class="flex flex-col bg-white p-6 rounded-sm flex-1 m-2">
            <p class="text-sm font-bold mb-12">Localization</p>
            <p class="text-sm">Create fully localized experiences for site visitors around the world</p>
          </div>
          <div class="flex flex-col bg-white p-6 rounded-sm w-2/5 m-2">
            <p class="text-sm font-bold mb-12">Localization</p>
            <p class="text-sm">Create fully localized experiences for site visitors around the world</p>
          </div>
          <div class="flex flex-col bg-white p-6 rounded-sm flex-1 m-2">
            <p class="text-sm font-bold mb-12">Localization</p>
            <p class="text-sm">Create fully localized experiences for site visitors around the world</p>
          </div>
        </div>
        <div class="flex flex-row text-dark w-full">
          <div class="flex flex-col bg-white p-6 rounded-sm flex-1 m-2">
            <p class="text-sm font-bold mb-12">Localization</p>
            <p class="text-sm">Create fully localized experiences for site visitors around the world</p>
          </div>
          <div class="flex flex-col bg-white p-6 rounded-sm flex-1 m-2">
            <p class="text-sm font-bold mb-12">Localization</p>
            <p class="text-sm">Create fully localized experiences for site visitors around the world</p>
          </div>
          <div class="flex flex-col bg-white p-6 rounded-sm w-1/5 m-2">
            <p class="text-sm font-bold mb-12">Localization</p>
            <p class="text-sm">Create fully localized experiences for site visitors around the world</p>
          </div>
          <div class="flex flex-col bg-white p-6 rounded-sm flex-1 m-2">
            <p class="text-sm font-bold mb-12">Localization</p>
            <p class="text-sm">Create fully localized experiences for site visitors around the world</p>
          </div>
        </div>
        <div class="flex flex-row text-dark w-full">
          <div class="flex flex-col bg-white p-6 rounded-sm flex-1 m-2">
            <p class="text-sm font-bold mb-12">Localization</p>
            <p class="text-sm">Create fully localized experiences for site visitors around the world</p>
          </div>
          <div class="flex flex-col bg-white p-6 rounded-sm flex-1 m-2">
            <p class="text-sm font-bold mb-12">Localization</p>
            <p class="text-sm">Create fully localized experiences for site visitors around the world</p>
          </div>
          <div class="flex flex-col bg-white p-6 rounded-sm w-2/5 m-2">
            <p class="text-sm font-bold mb-12">Localization</p>
            <p class="text-sm">Create fully localized experiences for site visitors around the world</p>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
