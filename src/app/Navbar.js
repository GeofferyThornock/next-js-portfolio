import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <div className="flex text-lg pt-3 pr-10 gap-8">
            <Link className="hover:text-gray-600" href="/">
                About
            </Link>
            <Link className="hover:text-gray-600" href="/projects">
                Projects
            </Link>
        </div>
    );
}
