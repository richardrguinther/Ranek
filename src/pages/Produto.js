import React from "react";

import { PagesContext } from "../context/PagesContext";
import { useParams } from "react-router-dom";

import styles from "../styles/pages/Produto.module.css";
import Slider from "../components/Slider";

import ProductsPrice from "../components/ProductsPrice";
import ProductsName from "../components/ProductsName";
import ProductsDescription from "../components/ProductsDescription";

const Produto = () => {
  const { id: productID } = useParams();

  const { loading, setLoading } = React.useContext(PagesContext);
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${productID}`)
      .then((response) => response.json())
      .then((json) => {
        setProduct(json);
        setLoading(false);
      });
  }, [productID, setLoading]);

  console.log(product);

  return (
    <main>
      <section className={styles.pageProdutoContainer}>
        {loading && <p>Carregando...</p>}
        {!loading && product && (
          <>
            <section className={styles.pageProdutoDisplay}>
              <Slider photos={product.fotos} />
              <section className={styles.pageProdutoInfo}>
                <ProductsPrice price={product.preco} />
                <ProductsName name={product.nome} />
                <ProductsDescription description={product.descricao} />
              </section>
            </section>
          </>
        )}
      </section>
    </main>
  );
};

export default Produto;
