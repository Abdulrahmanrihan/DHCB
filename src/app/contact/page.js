import Footer from "@/components/footer";
import Header from "@/components/header";

export default function contact(){
    return (
        <main className="bg-white">
            <Header/>
            <section class="flex flex-col md:flex-row md:m-12 m-6">
                <div class="flex flex-col md:w-2/5 w-full rounded-md bg-darker p-12">
                    <p class="text-white text-xl mb-3 font-bold">Connect</p>
                    <p class="text-white mb-12 text-xs">Out team is committed to helping you</p>
                    <p class="my-1 text-xs">Ezzat's phone</p>
                    <p class="my-1 text-xs">connect@dhcb.com</p>
                    <p class="my-1 text-xs">Egypt | United states</p>
                </div>
                <div class="flex flex-col w-full md:w-3/5 bg-white md:p-12 p-6">
                    <div class="flex flex-col md:flex-row justify-around">
                        <div class="flex flex-col m-4">
                            <p class="text-xs text-dark">Name</p>
                            <input type="text" id="name" label="Name" class="border-gray border-b"/>
                        </div>
                        <div class="flex flex-col m-4">
                            <p class="text-xs text-dark">Company website</p>
                            <input type="text" id="name" label="Name" class="border-gray border-b"/>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row justify-around">
                        <div class="flex flex-col m-4">
                            <p class="text-xs text-dark">Email</p>
                            <input type="email" id="name" label="Name" class="border-gray border-b"/>
                        </div>
                        <div class="flex flex-col m-4">
                            <p class="text-xs text-dark">Phone Number</p>
                            <input type="text" id="name" label="Name" class="border-gray border-b"/>
                        </div>
                    </div>
                    <p class="text-black font-bold md:p-12 pb-8 p-6">Select the service that you need</p>
                    <div class="flex md:flex-row flex-col justify-between md:px-12 px-6">
                    <div class="flex items-center md:my-0 my-2">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="default-radio-1" class="ms-2 text-sm font-medium text-black">PHONE</label>
                    </div>
                    <div class="flex items-center md:my-0 my-2">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="default-radio-1" class="ms-2 text-sm font-medium text-black">WEB</label>
                    </div>
                    <div class="flex items-center md:my-0 my-2">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="default-radio-1" class="ms-2 text-sm font-medium text-black">EFFECIENCY</label>
                    </div>
                    <div class="flex items-center md:my-0 my-2">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="default-radio-1" class="ms-2 text-sm font-medium text-black">EXPLORE</label>
                    </div>
                    </div>
                    <div class="flex flex-col w-full md:p-12 p-6">
                        <p class="text-xs text-dark mb-2">Short note</p>
                        <input type="text" placeholder="Give our team an idea of who, what and where" id="name" label="Name" class="border-gray border-b"/>
                    </div>
                    <button class="bg-black text-white py-2 px-12 mx-12 align-right w-fit rounded-md">Connect</button>
                </div>
            </section>
            <Footer/>
        </main>
    );
}