import React from "react";
import { useLocation } from "react-router-dom";

export const PagesContext = React.createContext();

export const PagesStorage = ({ children }) => {
  const location = useLocation();

  const [products, setProducts] = React.useState([]);
  const [error, setError] = React.useState(null);

  const getProducts = (url) => {
    const fetchedProduct = fetch(url).then((products) => products.json());

    return fetchedProduct;
  };

  // ----------------------------

 

  // ------------------------------

  // Fetch the products on start
  React.useEffect(() => {
    const url = "https://ranekapi.origamid.dev/json/api/produto";

    getProducts(url).then((result) => setProducts(result));
  }, []);
  // ----------------------------

  // Animate pages
  React.useEffect(() => {
    const headerHr = document.querySelector("#root").querySelector("hr");
    let elementToBeAnimated;

    try {
      elementToBeAnimated = headerHr.nextSibling;
    } catch (err) {
      setError(err);
    }

    if (elementToBeAnimated)
      elementToBeAnimated.style.animation += "animate-left 1s ease";
  }, [location]);
  // --------------

  return (
    <PagesContext.Provider value={{ location, products, error }}>
      {children}
    </PagesContext.Provider>
  );
};
