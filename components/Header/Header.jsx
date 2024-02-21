import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <Image
          src="file:///C:/Users/%D7%9E%D7%9C%D7%9B%D7%94/Downloads/imgres.htm"
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
