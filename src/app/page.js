import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowPointer, faBorderAll, faGlobe, faLink, faMagnifyingGlass, faPen, faSitemap, faUser, faBolt, faBagShopping, faCloud, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";


import ipad from "../assets/images/ipad.png";
import weblayout from "../assets/images/weblayout.png";
import dashboard from "../assets/images/dashboard.png";

import speed from "../assets/images/speed.png";
import security from "../assets/images/security.png";
import scalability from "../assets/images/scalability.png";

import infinity from "../assets/images/infinity.png"
import ecommerce from "../assets/images/ecommerce.png"

import devices from "../assets/images/devices.png"

export default function Home() {
  return (
    <main class="w-full bg-white">
      <Header/>
      <section class="p-12 md:p-24 pb-16 bg-darker flex flex-col md:flex-row">
        <div class="md:hidden flex flex-col w-full ">
          <Image class="mx-auto mt-4 mb-8" src={devices} width={500} height={100} />
        </div>
        <div class="flex flex-col md:w-2/5 w-full">
          <h1 class="text-gray text-5xl">Make</h1>
          <h1 class="font-bold text-white text-5xl">Keep your business up to date with Tech</h1>
          <p class="text-light-gray mt-8 mb-4">Optimize your Sales, integrate AI into your
          pipelines, cut your costs, up your product, and maintain your tech stack.</p>
          <a class="my-10" href="/contact"><button class="bg-blue rounded-md py-2 px-4">Contact Sales</button></a>
          <Link class="text-gray text-xs" href="/about">LEARN MORE ABOUT MAKE</Link>
        </div>
        <div class="hidden md:flex flex-col w-3/5">
          <Image class="mx-auto pl-12" src={devices} width={500} height={100} />
        </div>
      </section>
      <section class="flex md:flex-row flex-col md:px-32 md:pt-40 md:pb-32 px-16 py-12">
        <div class="flex flex-col flex-1">
          <h1 class="text-dark text-4xl font-bold md:mb-0 mb-6">All the tech you need, without management</h1>
        </div>
        <div class="flex flex-col flex-1">
          <p class="text-dark md:p-2">One product manager from our clients is enough for our team to drive all your tech magic. Connect us with your PM now!</p>
        </div>
      </section>
      <section class="flex md:flex-row flex-col md:p-32 p-16">
        <div class="flex flex-col md:w-3/5 w-full md:pr-24">
          <h1 class="text-3xl text-dark font-bold">Tech on the phone</h1>
          <p class="text-dark mt-2">Our team has built enough apps for IOS and Android to power your ideas </p>
          <a class="text-gray mt-8" href="/contact">Get your app now <t/><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
        </div>
        <div class="w-full md:w-2/5 md:mt-0 mt-8">
          <Image width={300} height={100} src={ipad}/>
        </div>
      </section>
      <section class="flex flex-col md:flex-row md:p-32 p-16">
        <div class="flex flex-col md:w-3/5 w-full md:pr-24">
          <h1 class="text-3xl text-dark font-bold">Boost your web presence</h1>
          <p class="text-dark mt-2">increase your exposure by partnering with 
          our team on the web </p>
          <a class="text-gray mt-8" href="/contact">Get your website now <t/><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
        </div>
        <div class="w-full md:w-2/5 md:mt-0 mt-8">
          <Image width={300} height={100} src={weblayout}/>
        </div>
      </section>
      <section class="flex flex-col md:flex-row md:p-32 p-16">
        <div class="flex flex-col w-full md:w-3/5 md:pr-24">
          <h1 class="text-3xl text-dark font-bold">Internal pipelines</h1>
          <p class="text-dark mt-2">Automate your business operations seamlessly. DHCB enjoy bringing digital transformation in multiple forms.</p>
          <a class="text-gray mt-8" href="/contact">Digitally transform now <t/><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
        </div>
        <div class="w-full md:w-2/5 md:mt-0 mt-8">
          <Image width={300} height={100} src={dashboard}/>
        </div>
      </section>
      <hr class="border-gray"/>
      <section class="p-16 md:p-32">
        <h1 class="text-4xl md:text-6xl text-dark text-center my-6">&quot;Hi-tech&quot;<br/> commitment</h1>
        <p class="text-dark text-center mt-12 text-xl">DHCB&apos;s internal reference to the commitment-for-success that we promise our partners. As we expect to work with the top-notch players of different ecosystems, each and every one of our team is committed to bring the same level of grit in every piece of work.</p>
        <div class="flex flex-col">
          <div class="flex flex-col md:flex-row my-24">
            <div class="flex flex-col flex-1 text-center m-auto md:my-0 my-6">
              <Image class="mx-auto mb-2" width={60} height={60} src={speed} />
              <h3 class="font-bold text-dark mb-2 text-2xl">Speed</h3>
              <p class="text-gray"> Fastest to the markets. Fastest tech solutions.</p>
            </div>
            <div class="flex flex-col flex-1 text-center m-auto mt-6 md:my-0 my-6">
              <Image class="mx-auto mb-2" width={45} height={45} src={scalability} />
              <h3 class="font-bold text-dark mb-2 text-2xl">Scalability</h3>
              <p class="text-gray"> Millions of users?<br/> International? <br/>
              We offer the tech. </p>
            </div>
            <div class="flex flex-col flex-1 text-center m-auto md:my-0 my-6">
              <Image class="mx-auto mb-2" width={60} height={60} src={security} />
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
      <section class="flex flex-col md:flex-row md:px-32 md:py-32 p-16">
        <div class="flex flex-col flex-1 md:mb-0 mb-6">
          <h1 class="text-dark text-4xl font-bold">Powerful tech stack</h1>
        </div>
        <div class="flex flex-col flex-1">
          <p class="text-dark md:p-2">Moore’s law: technology advancement doubles year-over-year. DHCB partners focus 100% on their operations while our team focus on integrating the latest and greatest tech</p>
        </div>
      </section>
      <section class="flex flex-col md:flex-row md:p-32 p-16">
        <div class="flex flex-col w-full md:w-3/5 md:pr-24">
          <h1 class="text-3xl text-dark font-bold">Sell online</h1>
          <p class="text-dark mt-2">We see a lot of value in bringing our partners’ products to customers who need them.</p>
          <a class="text-gray mt-8 font-bold" href="/contact">Build your online store now <t/><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
        </div>
        <div class="w-full md:w-2/5 md:mt-0 mt-8">
          <Image class="mx-auto" width={170} height={50} src={ecommerce}/>
        </div>
      </section>
      <section class="flex flex-col md:flex-row md:p-32 p-16">
        <div class="flex flex-col w-full md:w-3/5 md:pr-24">
          <h1 class="text-3xl text-dark font-bold">Integrate with businesses</h1>
          <p class="text-dark mt-2">People grow together. DHCB’s integration engineering team 
          specializes in using tech to make partnerships easier.</p>
          <a class="text-gray mt-8 font-bold" href="/contact">Drive business value now <t/><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
        </div>
        <div class="w-full md:w-2/5 md:mt-0 mt-8">
          <Image class="mx-auto" width={170} height={50} src={infinity}/>
        </div>
      </section>
      <section class="p-16 md:p-32 bg-beige">
        <div class="md:p-12 text-black md:mb-0 mb-12">
          <h1 class="text-4xl md:text-6xl mb-4">Ideas</h1>
          <p class="text-2xl md:text-4xl">Discover everything you can do with your team</p>
        </div>
        <div class="flex flex-col md:flex-row text-dark w-full">
          <div class="flex flex-col bg-white p-6 rounded-sm md:w-2/5 md:m-2 my-2">
            <div class="flex flex-row mb-12">
              <FontAwesomeIcon class="w-4 h-4 mt-0.5" icon={faGlobe} />
              <p class="text-sm font-bold my-auto ml-2"> Localization</p>
            </div>
            <p class="text-sm">Create fully localized experiences for site visitors around the world</p>
          </div>
          <div class="flex flex-col bg-white p-6 rounded-sm md:flex-1 md:m-2 my-2">
            <div class="flex flex-row mb-12">
              <FontAwesomeIcon class="w-4 h-4 mt-0.5" icon={faDatabase} />
              <p class="text-sm font-bold my-auto ml-2">Database storage</p>
            </div>
            <p class="text-sm">Define your data and structure them in the cloud</p>
          </div>
          <div class="flex flex-col bg-white p-6 rounded-sm md:flex-1 md:m-2 my-2">
            <div class="flex flex-row mb-12">
              <FontAwesomeIcon class="w-4 h-4 mt-0.5" icon={faBagShopping} />
              <p class="text-sm font-bold my-auto ml-2">Ecommerce</p>
            </div>
            <p class="text-sm">Goodbye templates and code design your store visually.</p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row text-dark w-full">
          <div class="flex flex-col bg-white p-6 rounded-sm md:flex-1 md:m-2 my-2">
            <div class="flex flex-row mb-12">
              <FontAwesomeIcon class="w-4 h-4 mt-0.5" icon={faUser} />
              <p class="text-sm font-bold my-auto ml-2"> User Accounts</p>
            </div>
            <p class="text-sm">Users for your system. Secure databases and records.</p>
          </div>
          <div class="flex flex-col bg-white p-6 rounded-sm md:w-2/5 md:m-2 my-2">
            <div class="flex flex-row mb-12">
              <FontAwesomeIcon class="w-4 h-4 mt-0.5" icon={faArrowPointer} />
              <p class="text-sm font-bold my-auto ml-2"> Designer</p>
            </div>
            <p class="text-sm">The power of CSS, HTML, and Javascript in a visual canvas.</p>
          </div>
          <div class="flex flex-col bg-white p-6 rounded-sm md:flex-1 md:m-2 my-2">
            <div class="flex flex-row mb-12">
              <FontAwesomeIcon class="w-4 h-4 mt-0.5" icon={faPen} />
              <p class="text-sm font-bold my-auto ml-2"> Customization</p>
            </div>
            <p class="text-sm">Custom-built environment for content teammates.</p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row text-dark w-full">
          <div class="flex flex-col bg-white p-6 rounded-sm md:flex-1 md:m-2 my-2">
            <div class="flex flex-row mb-12">
              <FontAwesomeIcon class="w-4 h-4 mt-0.5" icon={faSitemap} />
              <p class="text-sm font-bold my-auto ml-2"> Logic</p>
            </div>
            <p class="text-sm">Create custom automated workflows.</p>
          </div>
          <div class="flex flex-col bg-white p-6 rounded-sm md:flex-1 md:m-2 my-2">
            <div class="flex flex-row mb-12">
              <FontAwesomeIcon class="w-4 h-4 mt-0.5" icon={faMagnifyingGlass} />
              <p class="text-sm font-bold my-auto ml-2"> SEO</p>
            </div>
            <p class="text-sm">Optimize your website with controls,
            hosting, and flexible tools.</p>
          </div>
          <div class="flex flex-col bg-white p-6 rounded-sm md:w-1/5 md:m-2 my-2">
            <div class="flex flex-row mb-12">
              <FontAwesomeIcon class="w-4 h-4 mt-0.5" icon={faCloud} />
              <p class="text-sm font-bold my-auto ml-2"> Hosting</p>
            </div>
            <p class="text-sm">Light-speed hosting.</p>
          </div>
          <div class="flex flex-col bg-white p-6 rounded-sm md:flex-1 md:m-2 my-2">
            <div class="flex flex-row mb-12">
              <FontAwesomeIcon class="w-4 h-4 mt-0.5" icon={faBorderAll} />
              <p class="text-sm font-bold my-auto ml-2"> Grid</p>
            </div>
            <p class="text-sm">Build smart, responsive, CSS grid-
            powered layouts in Webflow visually.</p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row text-dark w-full">
          <div class="flex flex-col bg-white p-6 rounded-sm md:flex-1 md:m-2 my-2">
            <div class="flex flex-row mb-12">
              <FontAwesomeIcon class="w-4 h-4 mt-0.5" icon={faLink} />
              <p class="text-sm font-bold my-auto ml-2"> Integration</p>
            </div>
            <p class="text-sm">Leverage third-party apps.</p>
          </div>
          <div class="flex flex-col bg-white p-6 rounded-sm md:flex-1 md:m-2 my-2">
            <div class="flex flex-row mb-12">
              <p class="text-sm font-bold my-auto ml-2"> Figma</p>
            </div>
            <p class="text-sm">Turn your idea into UI using our designers.</p>
          </div>
          <div class="flex flex-col bg-white p-6 rounded-sm md:w-2/5 md:m-2 my-2">
            <div class="flex flex-row mb-12">
              <FontAwesomeIcon class="w-4 h-4 mt-0.5" icon={faBolt} />
              <p class="text-sm font-bold my-auto ml-2"> Interactions</p>
            </div>
            <p class="text-sm">Build websites interactions and animations visually.</p>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
