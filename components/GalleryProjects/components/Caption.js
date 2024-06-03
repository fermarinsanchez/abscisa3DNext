import React from "react";
import styles from "./Caption.module.css";

const Caption = ({ text }) => {
  return (
    <div className={styles.captionContainer}>
      <p>{text}</p>
    </div>
  );
};

export { Caption };
