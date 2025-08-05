// components/CatalogDropdown.tsx

import { LayoutGrid, ChevronRight } from "lucide-react";

import Dropdown from "./Dropdown";

import React from "react";



const categories = [

    "Laptops & Computers",

    "Smartphones & Electronics",

    "Home Appliances",

    "Gaming",

    "Fashion & Accessories",

];



export default function CatalogDropdown() {

    return (

        <Dropdown

            button={

                <button className="flex items-center gap-2 border-white border-2 rounded-xl px-4 py-2 text-white text-xl hover:bg-white/10">

                    <LayoutGrid />

                    CATALOG

                </button>

            }

        >

            <ul className="space-y-2">

                {categories.map((cat, idx) => (

                    <li

                        key={idx}

                        className="flex items-center justify-between px-3 py-2 rounded hover:bg-gray-100 cursor-pointer text-xl"

                    >

                        {cat}

                        <ChevronRight className="w-5 h-5 text-gray-400" />

                    </li>

                ))}

            </ul>

        </Dropdown>

    );

}