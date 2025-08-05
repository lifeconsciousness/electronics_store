import React from "react";

import { useState, useRef, useEffect, ReactNode } from "react";



interface DropdownProps {

    button: ReactNode;

    children: ReactNode;

    width?: string;

}

export default function Dropdown({ button, children, width = "w-80" }: DropdownProps) {

    const [isOpen, setIsOpen] = useState(false);

    const ref = useRef<HTMLDivElement>(null);



    // Close on outside click

    useEffect(() => {

        const handleClickOutside = (e: MouseEvent) => {

            if (ref.current && !ref.current.contains(e.target as Node)) {

                setIsOpen(false);

            }

        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);

    }, []);



    return (

        <div className="relative inline-block text-left" ref={ref}>

            <div onClick={() => setIsOpen((prev) => !prev)} className="cursor-pointer">

                {button}

            </div>



            <div

                className={`absolute z-50 mt-3 ${width} bg-white shadow-xl rounded-xl p-4 text-black transition-all duration-200 ease-in-out

${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}

`}

            >

                {children}

            </div>

        </div>

    );

}