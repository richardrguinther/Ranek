import React from "react";

const ProductsPrice = ({ price }) => {
  return (
    <p
      style={{
        padding: "0.4rem",
        backgroundColor: "#44ee12",
        maxWidth: "10rem",
        borderRadius: "0.4rem",
        margin: "1rem 0"
      }}
    >
      R${price}
    </p>
  );
};

export default ProductsPrice;
