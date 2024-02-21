import React, { Fragment } from "react";
import styles from "./Background.module.css";

const Background = () => {
  return (
    <Fragment>
      <h1>השכלה</h1>
      <div className={styles.school}>
        <div className={styles.institution}>
          <h2>B.S.C Industry and Management, Specialization in Information Systems. </h2>
          <h4>B.A Human Resources and Management, Bar Ilan University</h4>
        </div>
        <h3>Azrieli College</h3>
        <h3>2021 - 2024</h3>
      </div>
      <div className={styles.school}>
        <div className={styles.institution}>
          <h2>Lycée Langevin Wallon</h2>
          <h4>Champigny, Île-de-France, France</h4>
        </div>
        <h3>
          CPGE (Classe Préparatoire aux Grandes Ecoles), Engineering
          Physics/Applied Physics
        </h3>
        <h3>2005 - 2008</h3>
      </div>
      <div className={styles.school}>
        <div className={styles.institution}>
          <h2>Lycée christophe colomb</h2>
          <h4>Sucy en Brie, Île-de-France, France</h4>
        </div>
        <h3>Baccalauréat scientifique, Physical Sciences</h3>
        <h3>2002 - 2005</h3>
      </div>
    </Fragment>
  );
};

export default Background;
