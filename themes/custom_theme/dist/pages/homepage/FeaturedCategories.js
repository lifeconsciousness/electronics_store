import React from "react";
const categories = [
    {
        label: "Latching relays",
        img: "/categories/latching-relays.jpg",
        link: "/categories/latching-relays"
    },
    {
        label: "Astronomical and digital clocks",
        img: "/categories/astr-dig-clocks.jpg",
        link: "/categories/astronomical-digital-clocks"
    },
    {
        label: "Electric energy consumption meters",
        img: "https://source.unsplash.com/100x100/?electricity,meter",
        link: "/categories/energy-meters"
    },
    {
        label: "Power supplies",
        img: "https://source.unsplash.com/100x100/?power,supply",
        link: "/categories/power-supplies"
    },
    {
        label: "Solid state relays",
        img: "https://source.unsplash.com/100x100/?solid-state-relay",
        link: "/categories/solid-state-relays"
    },
    {
        label: "Overvoltage arresters",
        img: "https://source.unsplash.com/100x100/?voltage,protection",
        link: "/categories/overvoltage-arresters"
    },
    {
        label: "Power controllers",
        img: "https://source.unsplash.com/100x100/?power,controller",
        link: "/categories/power-controllers"
    },
    {
        label: "Installation contactors",
        img: "https://source.unsplash.com/100x100/?contactor",
        link: "/categories/installation-contactors"
    },
    {
        label: "Plug-in sockets on 35 mm rail mount GSR",
        img: "https://source.unsplash.com/100x100/?socket,relay",
        link: "/categories/gsr-rail-sockets"
    },
    {
        label: "Signal relays",
        img: "https://source.unsplash.com/100x100/?signal,relay",
        link: "/categories/signal-relays"
    },
    {
        label: "Miniature PCB power relays",
        img: "https://source.unsplash.com/100x100/?pcb,relay",
        link: "/categories/miniature-pcb-power-relays"
    },
    {
        label: "Industrial plug in Relays",
        img: "https://source.unsplash.com/100x100/?industrial,relay",
        link: "/categories/industrial-plug-relays"
    },
    {
        label: "High power Relays",
        img: "https://source.unsplash.com/100x100/?high-power,relay",
        link: "/categories/high-power-relays"
    },
    {
        label: "Modular installation Relays",
        img: "https://source.unsplash.com/100x100/?modular,relay",
        link: "/categories/modular-relays"
    },
    {
        label: "Interface relays",
        img: "https://source.unsplash.com/100x100/?interface,relay",
        link: "/categories/interface-relays"
    },
    {
        label: "Relays for railroad industry",
        img: "https://source.unsplash.com/100x100/?railroad,relay",
        link: "/categories/railroad-relays"
    },
    {
        label: "Staircase timer",
        img: "https://source.unsplash.com/100x100/?timer,switch",
        link: "/categories/staircase-timer"
    },
    {
        label: "Plug-in sockets and accessories for relays",
        img: "https://source.unsplash.com/100x100/?accessories,relay",
        link: "/categories/relay-accessories"
    },
    {
        label: "Programmable relay",
        img: "https://source.unsplash.com/100x100/?programmable,relay",
        link: "/categories/programmable-relay"
    },
    {
        label: "Time relays",
        img: "https://source.unsplash.com/100x100/?time,relay",
        link: "/categories/time-relays"
    },
    {
        label: "Bistable - impulse relays",
        img: "https://source.unsplash.com/100x100/?impulse,relay",
        link: "/categories/bistable-relays"
    },
    {
        label: "Monitoring relays",
        img: "https://source.unsplash.com/100x100/?monitoring,relay",
        link: "/categories/monitoring-relays"
    },
    {
        label: "Signal Lamps",
        img: "https://source.unsplash.com/100x100/?signal,lamp",
        link: "/categories/signal-lamps"
    },
    {
        label: "Charging stations for electric and plug-in hybrid cars",
        img: "https://source.unsplash.com/100x100/?charging,station",
        link: "/categories/charging-stations"
    }
];
const CategoriesGrid = ()=>{
    return /*#__PURE__*/ React.createElement("section", {
        className: "max-w-7xl mx-auto px-4 py-10"
    }, /*#__PURE__*/ React.createElement("h2", {
        className: "text-2xl font-bold mb-6"
    }, "Categories"), /*#__PURE__*/ React.createElement("div", {
        className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
    }, categories.map((category, index)=>/*#__PURE__*/ React.createElement("a", {
            href: category.link,
            key: index,
            className: "flex flex-col items-center text-center border rounded-lg p-4 hover:shadow-md transition bg-white hover:bg-blue-50"
        }, /*#__PURE__*/ React.createElement("img", {
            src: category.img,
            alt: category.label,
            className: "w-max object-contain mb-3",
            loading: "lazy"
        }), /*#__PURE__*/ React.createElement("span", {
            className: "text-xl font-medium text-blue-700 text-center"
        }, category.label)))));
};
export default CategoriesGrid;
export const layout = {
    areaId: "content-custom",
    sortOrder: 5
};
