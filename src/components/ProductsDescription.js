import React from "react";

const ProductsDescription = ({ description }) => {
  return (
    <p
      style={{ lineHeight: "1.5", letterSpacing: "0.05rem", margin: "1rem 0" }}
    >
      {description}
    </p>
  );
};

export default ProductsDescription;
