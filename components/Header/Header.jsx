import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <Image
          src="https://en.wikipedia.org/wiki/File:Salesforce.com_logo.svg"
          alt="Photo de profil"
          width={100}
          height={100}
        />
      </div>
      <h1 className={styles.title}>Reut Malka </h1>
    </div>
  );
};

export default Header;
