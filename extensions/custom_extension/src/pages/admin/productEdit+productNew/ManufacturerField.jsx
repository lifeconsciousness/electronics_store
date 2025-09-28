import PropTypes from "prop-types";
import React from "react";
import { Field } from "@components/common/form/Field";

export default function ManufacturerField({ product }) {
  return (
    <div className="form-field-container">
      <Field
        name="manufacturer"
        type="text"
        label="Manufacturer"
        placeholder="Enter manufacturer name"
        value={product?.manufacturer || ""}
        validationRules={[]}
      />
      <div className="field-note">
        <span>Specify the manufacturer or brand of this product</span>
      </div>
    </div>
  );
}

ManufacturerField.propTypes = {
  product: PropTypes.shape({
    manufacturer: PropTypes.string,
  }),
};

ManufacturerField.defaultProps = {
  product: {},
};

export const layout = {
  areaId: "productFormInner",
  sortOrder: 25,
};