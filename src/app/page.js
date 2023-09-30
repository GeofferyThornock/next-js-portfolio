import About from "./About";
import Navbar from "./Navbar";

export default function Home() {
    return (
        <div className=" min-h-screen  font-serif">
            <main className="flex justify-between p-8 gap-5">
                <p className="text-4xl drop-shadow-2xl">Geoffery Thornock</p>
                <Navbar />
            </main>
            <About />
        </div>
    );
}
