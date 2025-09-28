import PropTypes from "prop-types";
import React from "react";
import { Field } from "@components/common/form/Field";
export default function ManufacturerField({ product }) {
    return /*#__PURE__*/ React.createElement("div", {
        className: "form-field-container"
    }, /*#__PURE__*/ React.createElement(Field, {
        name: "manufacturer",
        type: "text",
        label: "Manufacturer",
        placeholder: "Enter manufacturer name",
        value: product?.manufacturer || "",
        validationRules: []
    }), /*#__PURE__*/ React.createElement("div", {
        className: "field-note"
    }, /*#__PURE__*/ React.createElement("span", null, "Specify the manufacturer or brand of this product")));
}
ManufacturerField.propTypes = {
    product: PropTypes.shape({
        manufacturer: PropTypes.string
    })
};
ManufacturerField.defaultProps = {
    product: {}
};
export const layout = {
    areaId: "productFormInner",
    sortOrder: 25
};
