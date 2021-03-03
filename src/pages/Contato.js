import React from "react";

import styles from "../styles/pages/Contato.module.css";
import contactImage from "../img/contato.jpg";

const Contato = () => {
  React.useEffect(() => {
    console.log("contato");
  }, []);

  return (
    <main>
      <section className={styles.container}>
        <div className={styles.photo}>
          <img
            src={contactImage}
            className={styles.contactImage}
            alt="Imagem de contato"
          />
        </div>
        <div className={styles.informacoesContato}></div>
      </section>
    </main>
  );
};

export default Contato;
