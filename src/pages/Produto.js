import React from "react";

import { PagesContext } from "../context/PagesContext";
import { useParams } from "react-router-dom";

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

  return (
    <main>
      <section>
        {loading && <p>Carregando...</p>}
        {!loading &&
          product &&
          product.fotos.map((foto, index) => (
            <img key={foto + index} src={foto.src} alt={foto} />
          ))}
      </section>
    </main>
  );
};

export default Produto;
