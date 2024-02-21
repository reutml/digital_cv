import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h3>Contact</h3>
      <ul>
        <li>Name : Reut Malka</li>
        <li>E-Mail : reut@gmail.com</li>
        <li>Tel : +97252426XXX</li>
      </ul>
    </div>
  );
};

export default Contact;
