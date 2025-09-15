// components/CatalogDropdown.tsx
import { LayoutGrid, ChevronDown, ChevronRight } from "lucide-react";
import Dropdown from "./Dropdown";
import React from "react";
const categories = [
    {
        label: "Latching relays",
        img: "/categories/latching-relays.jpg",
        link: "/relays"
    },
    {
        label: "Astronomical and digital clocks",
        img: "/categories/astr-dig-clocks.jpg",
        link: "/categories/astronomical-digital-clocks"
    },
    {
        label: "Electric energy consumption meters",
        img: "/categories/energy-meters.jpg",
        link: "/categories/energy-meters"
    },
    {
        label: "Power supplies",
        img: "categories/power-supplies.jpg",
        link: "/categories/power-supplies"
    },
    {
        label: "Solid state relays",
        img: "categories/solid-state-relays.jpg",
        link: "/categories/solid-state-relays"
    },
    {
        label: "Overvoltage arresters",
        img: "categories/overvoltage-arresters.jpg",
        link: "/categories/overvoltage-arresters"
    },
    {
        label: "Power controllers",
        img: "categories/power-controllers.jpg",
        link: "/categories/power-controllers"
    },
    {
        label: "Installation contactors",
        img: "/categories/installation-contactors.jpg",
        link: "/categories/installation-contactors"
    },
    {
        label: "Plug-in sockets on 35 mm rail mount GSR",
        img: "/categories/sockets.png",
        link: "/categories/gsr-rail-sockets"
    },
    {
        label: "Signal relays",
        img: "/categories/signal-relays.jpg",
        link: "/categories/signal-relays"
    },
    {
        label: "Miniature PCB power relays",
        img: "/categories/miniature-pcb.jpg",
        link: "/categories/miniature-pcb-power-relays"
    },
    {
        label: "Industrial plug in Relays",
        img: "/categories/industrial-plug-in-relays.jpg",
        link: "/categories/industrial-plug-relays"
    }
];
export default function CatalogDropdown() {
    return /*#__PURE__*/ React.createElement(Dropdown, {
        button: /*#__PURE__*/ React.createElement("button", {
            className: "flex items-center gap-2 border-white border-2 rounded-xl p-2 hover:bg-white/10"
        }, /*#__PURE__*/ React.createElement(LayoutGrid, {
            className: "w-8 h-8"
        }), "CATALOG", /*#__PURE__*/ React.createElement(ChevronDown, {
            className: "w-5 h-5"
        })),
        width: "size-max"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "space-y-1"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "px-4 py-4 text-gray-1000 font-bold text-lg uppercase tracking-wider border-b-2 border-gray-300 mb-3"
    }, "Browse Categories"), categories.map((cat, idx)=>/*#__PURE__*/ React.createElement("div", {
            key: idx,
            className: "px-4 py-3 rounded hover:bg-gray-100 cursor-pointer text-gray-700 text-2xl flex items-center justify-between"
        }, cat.label, /*#__PURE__*/ React.createElement(ChevronRight, {
            className: "w-4 h-4"
        }))), /*#__PURE__*/ React.createElement("div", {
        className: "md:hidden"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "px-4 py-4 text-gray-1000 font-bold text-lg uppercase tracking-wider border-b-2 border-gray-300 mt-6 mb-3"
    }, "Quick Links"), /*#__PURE__*/ React.createElement("div", {
        className: "px-4 py-2 rounded hover:bg-gray-100 cursor-pointer text-gray-700 flex items-center gap-2 text-2xl"
    }, "Manufacturers", /*#__PURE__*/ React.createElement(ChevronDown, {
        className: "w-4 h-4"
    })), /*#__PURE__*/ React.createElement("div", {
        className: "px-4 py-2 rounded hover:bg-gray-100 cursor-pointer text-gray-700 text-2xl"
    }, "Bestsellers"), /*#__PURE__*/ React.createElement("div", {
        className: "px-4 py-2 rounded hover:bg-gray-100 cursor-pointer text-gray-700 text-2xl"
    }, "Special-Deals"))));
}

