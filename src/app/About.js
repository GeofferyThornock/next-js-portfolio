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
                Adipisicing labore Lorem enim cupidatat exercitation aute
                ullamco dolor duis esse amet. Dolor culpa cillum veniam id. Ad
                proident proident amet tempor nulla eiusmod deserunt. Esse
                pariatur quis nulla ut ullamco. Do elit et pariatur minim ut.
                Commodo proident laboris tempor qui dolore. Nostrud nisi elit
                excepteur ad amet. Irure ut do in mollit sit elit quis.
                Excepteur mollit nulla mollit proident eu non enim sit. In
                labore dolore cillum occaecat eiusmod. Enim enim reprehenderit
                amet et eu irure. Minim non nisi nisi esse commodo commodo
                occaecat. Reprehenderit elit quis est cillum ex deserunt nisi.
                Cillum velit et non reprehenderit occaecat minim enim. Labore id
                aute dolore sunt exercitation ea non qui culpa officia ullamco
                anim ipsum reprehenderit. Dolor enim non duis occaecat laboris
                dolore magna esse duis. Laboris ut ut ad id. Nostrud deserunt
                fugiat consequat et est esse. Enim id irure fugiat adipisicing
                elit ex culpa incididunt ut ullamco tempor do enim in.
            </p>
        </div>
    );
}
