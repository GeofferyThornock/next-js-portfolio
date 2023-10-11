import React from "react";
import Navbar from "../Navbar";

export default function Projects() {
    return (
        <div className="min-h-screen  font-serif">
            <main className="flex justify-between p-8 gap-5">
                <p className="text-4xl drop-shadow-2xl">Geoffery Thornock</p>
                <Navbar />
            </main>
            <div className="flex  justify-center gap-5 px-20 flex-wrap">
                <div className="flex flex-col flex-auto bg-slate-300 p-3 rounded-lg items-center text-center">
                    <p className="text-xl">
                        Restaurant Reservation Application
                    </p>
                    <img
                        className="w-1/4 pt-10"
                        src="https://camo.githubusercontent.com/be071d8b246e49bcef0b45a75ad5972b34012520aacb993e874981b70ccf715d/68747470733a2f2f692e696d6775722e636f6d2f646855556d34682e706e67"
                    ></img>
                    <p className="pt-5">
                        A fullstack app for a restaurant business to track and
                        manage tables, reservations and booking.
                    </p>
                    <p className="text-sm text-slate-600 pt-3">
                        Tech Used: React.js, Node.js, Express, PostgreSQL
                        Database.
                    </p>
                </div>
                <div className="flex flex-col bg-slate-300 p-3 rounded-lg items-center text-center">
                    <p className="text-xl">
                        Restaurant Reservation Application
                    </p>
                    <img
                        className="w-1/4 pt-10"
                        src="https://camo.githubusercontent.com/be071d8b246e49bcef0b45a75ad5972b34012520aacb993e874981b70ccf715d/68747470733a2f2f692e696d6775722e636f6d2f646855556d34682e706e67"
                    ></img>
                    <p className="pt-5">
                        A fullstack app for a restaurant business to track and
                        manage tables, reservations and booking.
                    </p>
                    <p className="text-sm text-slate-600 pt-3">
                        Tech Used: React.js, Node.js, Express, PostgreSQL
                        Database.
                    </p>
                </div>
            </div>
        </div>
    );
}
