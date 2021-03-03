import React from "react";

import ProductsThumbs from "../components/ProductsThumbs";

import styles from "../styles/pages/Home.module.css";
import { PagesContext } from "../context/PagesContext";
import Loading from "../components/Loading";

const Home = () => {
  const [products, setProducts] = React.useState([]);

  const getProducts = (url) => {
    const fetchedProduct = fetch(url).then((products) => products.json());

    return fetchedProduct;
  };

  // Fetch the products on start
  React.useEffect(() => {
    const url = "https://ranekapi.origamid.dev/json/api/produto";

    getProducts(url).then((result) => setProducts(result));
  }, []);
  // ----------------------------

  const { loading } = React.useContext(PagesContext);

  return (
    <main className={styles.container}>
      {loading && <Loading />}
      {!loading &&
        products &&
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
