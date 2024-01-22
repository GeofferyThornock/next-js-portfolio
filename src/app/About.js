import React from "react";

export default function About() {
    let opacity = "opacity-100";

    return (
        <div className="flex justify-center text-center items-center flex-col pt-10">
            <p className="text-xl drop-shadow-2xl">
                Hi, my name is Geoffery! <br />
                I'm a full-stack Programmer with a proficiency in Back-End
                Programming
            </p>
            <div className="flex items-center justify-center gap-3 pt-10">
                <img
                    src="https://i.imgur.com/5NHayeL.jpg"
                    className="w-1/4 rounded-lg shadow-2xl grayscale"
                ></img>
                <img
                    src="https://i.imgur.com/uE61fvB.jpg"
                    className="w-1/4 rounded-lg shadow-2xl grayscale"
                ></img>
            </div>
            <p className="pt-20 px-32">
                Hey, My name's Geoffery and I tend to enjoy solving the hard
                problems. Being homeschooled I had to learn on my own, and that
                really taught me to really enjoy the process of gaining new
                information, so it became a really big hobby of mine, and that's
                how I found programming, mixing the best of both worlds, solving
                hard problems and learning constantly.
            </p>
            <p className="pt-5 px-32">
                Since I was little I've always had a knack for computers, when I
                was about 3 years old I would hop on our wonderful Dell Optiplex
                and head to some old flash game site on my own, so it wasn't
                surprising when at about 13 I found out about programming, and
                I've been learning off and on ever since. It's been a wonderful
                journey and deciding to do a programming bootcamp and
                transferring my programming skills to more real world
                applications, I consider it now one of the best decisions I've
                ever made. Learning countless frameworks, some development
                philosophy, and having my classmates there really made it all an
                amazingly wonderful experience.
            </p>
            <p className="pt-5 px-32">
                Being an Eagle Scout, and a patrol leader for roughly 4 years of
                that time, I gained a lot of experience in Leadership, and
                communication, even receiving official training multiple times.
                That has helped me form bonds with coworkers and just generally
                get along with everyone I meet.
            </p>
            <p className="pt-5 px-32">
                My specialties are Full-Stack Web Development, Node.js, Express,
                RESTful APIs, PostgreSQL, HTML, CSS, JavaScript, React, Visual
                Studio Code, Eclipse, UNIX Terminals, as well as some
                experience`` in Java, Python, C#, Golang.
            </p>
            <p className="pt-10 px-32 pb-5">
                This Portfolio was made with Next.js along with the capabilities
                of Tailwind
            </p>
        </div>
    );
}
