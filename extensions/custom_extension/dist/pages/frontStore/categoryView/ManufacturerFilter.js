import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import ManufacturerFilter from "@components/frontStore/catalog/ManufacturerFilter/ManufacturerFilter";
export default function ManufacturerFilterContainer({ currentUrl }) {
    const [selectedManufacturer, setSelectedManufacturer] = useState("");
    // Parse URL parameters on component mount
    useEffect(()=>{
        if (typeof window !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search);
            const manufacturerParam = urlParams.get("manufacturer");
            if (manufacturerParam) {
                setSelectedManufacturer(manufacturerParam);
            }
        }
    }, []);
    const handleManufacturerChange = (manufacturer)=>{
        setSelectedManufacturer(manufacturer);
        if (typeof window !== 'undefined') {
            // Update URL with the new filter
            const urlParams = new URLSearchParams(window.location.search);
            if (manufacturer) {
                urlParams.set("manufacturer", manufacturer);
            } else {
                urlParams.delete("manufacturer");
            }
            // Reset to first page when filter changes
            urlParams.delete("page");
            const newSearch = urlParams.toString();
            const newUrl = `${window.location.pathname}${newSearch ? `?${newSearch}` : ""}`;
            // Use window.location to navigate (EverShop style)
            window.location.href = newUrl;
        }
    };
    return /*#__PURE__*/ React.createElement(ManufacturerFilter, {
        selectedManufacturer: selectedManufacturer,
        onManufacturerChange: handleManufacturerChange
    });
}
ManufacturerFilterContainer.propTypes = {
    currentUrl: PropTypes.string
};
export const layout = {
    areaId: "categoryFilters",
    sortOrder: 20
};
