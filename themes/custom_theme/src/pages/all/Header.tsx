import React from "react";
import {
    Heart,
    User,
    ShoppingCart,
    Search,
    Menu,
    ChevronDown,
    Globe,
    LayoutGrid,
} from "lucide-react";
import Dropdown from "./Dropdown";
import CatalogDropdown from "./CatalogDropdown";

export default function Header() {
    return (
        <header className="w-full font-sans text-2xl">
            {/* Top Header */}
            <div className="bg-[#2f2f2f] text-white px-10 py-6 flex items-center justify-between xl:px-56">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="text-orange-600 text-4xl">💡</div>
                    <div className="text-3xl font-bold">
                        <span className="text-orange-600">ele</span>
                        <span className="text-gray-300">ctronics</span>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="flex-1 mx-10 w-full max-w-5xl flex bg-white rounded-r text-xl">
                    <div className="relative w-full flex items-center justify-center">
                        <Search className="left-4 text-gray-500 ml-4" size={20} />
                        <input
                            type="text"
                            placeholder="Find"
                            className="w-full pl-14 pr-4 py-3 rounded-l bg-white text-black text-xl outline-none"
                        />
                    </div>
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 text-xl rounded-r">
                        SEARCH
                    </button>

                </div>

                {/* <div className="search-input-container">
                    <div className="search-input"><a href="#" className="close-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="2rem" height="2rem"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a><div className="form-field-container null"><div className="field-wrapper flex flex-grow"><div className="field-prefix align-middle"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div><input type="text" placeholder="Search" value="" /><div className="field-border"></div></div></div></div>
                </div> */}

                {/* Icons */}
                <div className="flex items-center gap-10 text-xl">
                    {/* <div className="flex flex-col items-center">
                        <Heart className="w-6 h-6 mb-1" />
                        <span>Saved List</span>
                    </div> */}

                    <a href="/account">
                        <button className="flex flex-col items-center">
                            <User className="w-6 h-6 mb-1" />
                            <span>Account</span>
                        </button>
                    </a>

                    <a href="/cart">
                        <button className="flex flex-col items-center">
                            <ShoppingCart className="w-6 h-6 mb-1" />
                            <span>Basket</span>
                        </button>

                    </a>
                </div>
            </div>

            {/* Navigation Bar */}
            <div className="bg-orange-600 text-white text-xl font-semibold px-10 py-4 flex items-center justify-between xl:px-56">
                <div className="flex gap-10 items-center">
                    {/* <button className="flex items-center gap-2 border-white border-2 rounded-xl p-2">
                        <LayoutGrid /> CATALOG
                    </button> */}
                    <CatalogDropdown />
                    <button>STOCK CLEARANCE</button>
                    <button className="flex items-center gap-1">
                        MANUFACTURERS
                        <ChevronDown className="w-5 h-5" />
                    </button>
                    <button>SPECIAL-DEALS</button>
                </div>

                {/* Right: Currency / Language / Quick Buy */}
                <div className="flex items-center gap-12">
                    {/* <button className="bg-gray-100 text-black px-4 py-2 rounded text-lg">
                        QUICK BUY
                    </button> */}
                    <span>EUR</span>
                    {/* <Globe className="mr-2" /> */}
                    <Dropdown
                        button={
                            <button className="flex items-center gap-2 border-2 rounded-xl px-4 py-2 hover:bg-white/10">
                                <Globe className="mr-2" />
                            </button>
                        }
                    >
                        <ul className="space-y-2">
                            <li className="flex items-center justify-between px-3 py-2 rounded hover:bg-gray-100 cursor-pointer text-xl">NL</li>
                            <li className="flex items-center justify-between px-3 py-2 rounded hover:bg-gray-100 cursor-pointer text-xl">EN</li>
                        </ul>
                    </Dropdown>
                </div>
            </div>
        </header>
    );
}
