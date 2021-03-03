import React from "react";

import Products from "../components/Products";
import { PagesContext } from "../context/PagesContext";

const Produto = () => {
  const { products, location } = React.useContext(PagesContext);

  let selectedProduct;

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const produtoPesquisado = params.get("productID");

    selectedProduct = products.filter(
      (product) => product.id === produtoPesquisado
    );
    console.log(selectedProduct);
  }, []);

  return (
    <main>
      {products.map((product) => (
        <li>{product.nome}</li>
      ))}
    </main>
  );
};

export default Produto;
