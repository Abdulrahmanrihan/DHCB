import Footer from "@/components/footer";
import Header from "@/components/header";

export default function construction(){
    return (
        <main class="relative h-screen">
            <Header/>
            <p class="p-16 md:p-32 text-3xl md:text-4xl text-center">Undergoing some changes...</p>
            <div class="absolute bottom-0 w-full">
                <Footer/>
            </div>
        </main>
    );
}