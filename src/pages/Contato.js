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
        <div className={styles.informacoesContato}>
          <h3>Entre em contato</h3>
          <ul>
            <li>suporte@ranek.com</li>
            <li>9999-9999</li>
            <li>Rua Ali Perto, 999</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Contato;
