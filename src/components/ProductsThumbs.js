import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/components/ProductsThumbs.module.css";

const ProductsThumbs = ({ photo, name, id }) => {
  return (
    <Link to={`/Ranek/produto/${id}`}>
      <div className={styles.container}>
        {photo && <img src={photo.src} alt={name} />}
        <h3>{name}</h3>
      </div>
    </Link>
  );
};

export default ProductsThumbs;
