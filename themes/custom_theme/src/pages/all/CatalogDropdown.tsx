// components/CatalogDropdown.tsx

import { LayoutGrid, ChevronRight } from "lucide-react";
import Dropdown from "./Dropdown";
import React from "react";


const categories = [
  {
    label: "Latching relays",
    img: "/categories/latching-relays.jpg",
    link: "/relays",
  },
  {
    label: "Astronomical and digital clocks",
    img: "/categories/astr-dig-clocks.jpg",
    link: "/categories/astronomical-digital-clocks",
  },
  {
    label: "Electric energy consumption meters",
    img: "/categories/energy-meters.jpg",
    link: "/categories/energy-meters",
  },
  {
    label: "Power supplies",
    img: "categories/power-supplies.jpg",
    link: "/categories/power-supplies",
  },
  {
    label: "Solid state relays",
    img: "categories/solid-state-relays.jpg",
    link: "/categories/solid-state-relays",
  },
  {
    label: "Overvoltage arresters",
    img: "categories/overvoltage-arresters.jpg",
    link: "/categories/overvoltage-arresters",
  },
  {
    label: "Power controllers",
    img: "categories/power-controllers.jpg",
    link: "/categories/power-controllers",
  },
  {
    label: "Installation contactors",
    img: "/categories/installation-contactors.jpg",
    link: "/categories/installation-contactors",
  },
  {
    label: "Plug-in sockets on 35 mm rail mount GSR",
    img: "/categories/sockets.png",
    link: "/categories/gsr-rail-sockets",
  },
  {
    label: "Signal relays",
    img: "/categories/signal-relays.jpg",
    link: "/categories/signal-relays",
  },
  {
    label: "Miniature PCB power relays",
    img: "/categories/miniature-pcb.jpg",
    link: "/categories/miniature-pcb-power-relays",
  },
  {
    label: "Industrial plug in Relays",
    img: "/categories/industrial-plug-in-relays.jpg",
    link: "/categories/industrial-plug-relays",
  }
]



export default function CatalogDropdown() {
    return (
        <Dropdown
            button={
                <button className="flex items-center gap-2 border-white border-2 rounded-xl px-4 py-2 text-white text-xl hover:bg-white/10">
                    <LayoutGrid />
                    CATALOG
                </button>
            }
            width="size-max"

        >
            <ul className="space-y-2">
                {categories.map((cat, idx) => (
                    <li
                        key={idx}
                        className="flex items-center justify-between px-3 py-2 rounded hover:bg-gray-100 cursor-pointer text-xl"
                    >
                        {cat.label}
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                    </li>
                ))}
            </ul>
        </Dropdown>

    );

}