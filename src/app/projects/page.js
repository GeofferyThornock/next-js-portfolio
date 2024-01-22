import React from "react";
import Link from "next/link";
import Navbar from "../Navbar";
const window = global.window;

export default function Projects() {
    return (
        <div className="min-h-screen  font-serif">
            <main className="flex justify-between p-8 gap-5">
                <p className="text-4xl drop-shadow-2xl">Geoffery Thornock</p>
                <Navbar />
            </main>
            <h1 className="text-center text-2xl p-8">My Projects</h1>
            <div className="flex flex-wrap gap-5 px-20 justify-center justify-items-start">
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <Link
                        href="https://github.com/GeofferyThornock/restaurant-reservation"
                        passHref={true}
                    >
                        <p className="text-xl">
                            Restaurant Reservation Application
                        </p>
                        <img
                            className="w-auto pt-10"
                            src="https://i.imgur.com/dhUUm4h.png"
                        ></img>
                        <p className="pt-5">
                            A fullstack app for a restaurant business to track
                            and manage tables, reservations and booking.
                        </p>
                        <p className="text-sm text-slate-600 pt-3">
                            Tech Used: React.js, Node.js, Express, PostgreSQL
                            Database.
                        </p>
                    </Link>
                </div>
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <Link
                        href="https://github.com/GeofferyThornock/flashcards-react"
                        passHref={true}
                    >
                        <p className="text-xl">
                            Flashcard Studying Application
                        </p>
                        <img
                            className="w-auto pt-10"
                            src="https://i.imgur.com/VIiY2ul.png"
                        ></img>
                        <p className="pt-5">
                            A fullstack app to create flashcard decks to make
                            memorization easier
                        </p>
                        <p className="text-sm text-slate-600 pt-3">
                            Tech Used: React.js, Node.js, Express, PostgreSQL
                            Database.
                        </p>
                    </Link>
                </div>
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <Link
                        href="https://github.com/GeofferyThornock/decoder-ring"
                        passHref={true}
                    >
                        <p className="text-xl">Decoder/Encoding Software</p>
                        <img
                            className="w-auto pt-10"
                            src="https://i.imgur.com/UVxp5Oe.png"
                        ></img>
                        <p className="pt-5">
                            An app that uses backend algorithms to encode and
                            decode specific ciphers
                        </p>
                        <p className="text-sm text-slate-600 pt-3">
                            Tech Used: Javascript, Node.js, Express.
                        </p>
                    </Link>
                </div>
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <Link
                        href="https://github.com/GeofferyThornock/grubdash"
                        passHref={true}
                    >
                        <p className="text-xl">Recipe Cards</p>
                        <img
                            className="w-auto pt-10"
                            src="https://i.imgur.com/EVP5Tl9.png"
                        ></img>
                        <p className="pt-5">
                            A simple application that mimics the functionality
                            of a grubhub clone.
                        </p>
                        <p className="text-sm text-slate-600 pt-3">
                            Tech Used: Node.js, Express.
                        </p>
                    </Link>
                </div>
            </div>
            <div className="flex justify-center p-10 ">
                <sub className="text-slate-500">
                    &copy; Geoffery Thornock 2023
                </sub>
            </div>
        </div>
    );
}
