import React from "react";
import { useLocation } from "react-router-dom";

export const PagesContext = React.createContext();

export const PagesStorage = ({ children }) => {
  const location = useLocation();

  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

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
    <PagesContext.Provider value={{ location, error, loading, setLoading }}>
      {children}
    </PagesContext.Provider>
  );
};
