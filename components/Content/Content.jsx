import React, { useState } from "react";
import Background from "../Background/Background";
import Experiences from "../Experiences/Experiences";
import styles from "./Content.module.css";

const content = {
  background: 1,
  experiences: 2,
};

const Content = () => {
  const [display, setDisplay] = useState(content.background);

  const showBackground = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.buttonWrapper}>
        <button
          onClick={() => setDisplay(content.background)}
          disabled={display === content.background ? true : false}
        >
          השכלה
        </button>
        <button
          onClick={() => setDisplay(content.experiences)}
          disabled={display === content.experiences ? true : false}
        >
          ניסיון תעסוקתי
        </button>
      </div>
      <div className={styles.contentWrapper}>
        {display === content.background && <Background />}
        {display === content.experiences && <Experiences />}
      </div>
    </div>
  );
};

export default Content;
