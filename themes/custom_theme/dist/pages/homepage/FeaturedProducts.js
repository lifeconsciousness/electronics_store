import ProductList from "@components/frontStore/catalog/product/list/List";
import PropTypes from "prop-types";
import React from "react";
export default function FeaturedProducts({ collection }) {
    if (!collection) {
        return null;
    }
    return /*#__PURE__*/ React.createElement("section", {
        className: "mx-8 px-4 py-10 xl:mx-56"
    }, /*#__PURE__*/ React.createElement("h2", {
        className: "text-3xl font-bold mb-6"
    }, "Featured Items"), /*#__PURE__*/ React.createElement("div", {
        className: "w-[60%] h-fit"
    }, /*#__PURE__*/ React.createElement(ProductList, {
        products: collection.products.items,
        countPerRow: 3
    })));
}
FeaturedProducts.propTypes = {
    collection: PropTypes.shape({
        collectionId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        products: PropTypes.shape({
            items: PropTypes.arrayOf(PropTypes.shape({
                productId: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.shape({
                    regular: PropTypes.shape({
                        value: PropTypes.number.isRequired,
                        text: PropTypes.string.isRequired
                    }).isRequired,
                    special: PropTypes.shape({
                        value: PropTypes.number.isRequired,
                        text: PropTypes.string.isRequired
                    }).isRequired
                }).isRequired,
                image: PropTypes.shape({
                    alt: PropTypes.string.isRequired,
                    url: PropTypes.string.isRequired
                }).isRequired,
                url: PropTypes.string.isRequired
            })).isRequired
        }).isRequired
    }).isRequired
};
FeaturedProducts.defaultProps = {
    featuredProducts: []
};
export const layout = {
    areaId: "content-custom",
    sortOrder: 15
};
export const query = `
  query query {
    collection (code: "homepage") {
      collectionId
      name
      products (filters: [{key: "limit", operation: eq, value: "6"}]) {
        items {
          productId
          name
          price {
            regular {
              value
              text
            }
            special {
              value
              text
            }
            }
          image {
            alt
            url: listing
          }
          url
        }
      }
    }
  }
`;

