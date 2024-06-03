import React from "react";
import style from "./MoreNews.module.css";
import Link from "next/link";
const MoreNews = () => {
  return (
    <div className={style.root}>
      <Link href={"/news"}>
        <div className={style.circleContainer}>
          <p className={style.moreNews}>Ver todas las noticias</p>
        </div>
      </Link>
    </div>
  );
};

export { MoreNews };
