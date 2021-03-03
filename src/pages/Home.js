import React from "react";

import ProductsThumbs from "../components/ProductsThumbs";

import styles from "../styles/pages/Home.module.css";
import { PagesContext } from "../context/PagesContext";

const Home = () => {
  const { products } = React.useContext(PagesContext);

  return (
    <main className={styles.container}>
      {products &&
        products.map((product) => {
          return (
            <ProductsThumbs
              key={product.id}
              photo={product.fotos[0]}
              name={product.nome}
              id={product.id}
            />
          );
        })}
    </main>
  );
};

export default Home;
