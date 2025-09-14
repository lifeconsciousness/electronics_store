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
const CategoriesGrid = ()=>{
    return /*#__PURE__*/ React.createElement("section", {
        className: "mx-8 px-4 py-10 xl:mx-56"
    }, /*#__PURE__*/ React.createElement("h2", {
        className: "text-3xl font-bold mb-6"
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
            className: "text-2xl font-medium text-blue-700 text-center"
        }, category.label)))));
};
export default CategoriesGrid;
export const layout = {
    areaId: "content-custom",
    sortOrder: 5
};
