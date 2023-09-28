import Navbar from "./Navbar";

export default function Home() {
    return (
        <main className="flex justify-between min-h-screen p-8 font-serif gap-5">
            <p className="text-4xl">Geoffery Thornock</p>
            <Navbar />
        </main>
    );
}
