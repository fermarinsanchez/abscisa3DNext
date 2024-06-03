import React from "react";
import style from "../Gallery.module.css";

function ImageItem({ src, alt, caption }) {
  return (
    <div>
      <img src={src} alt={alt} />
      <div className={style.captionContainer}>
        <caption>{caption}</caption>
      </div>
    </div>
  );
}

export { ImageItem };
