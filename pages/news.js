import React from "react";
import Link from "next/dist/client/link";
import { news as newsData } from "../json_projects/news";
import style from "../styles/news.module.css";

export const getStaticProps = async () => {
  return {
    props: {
      news: newsData,
    },
  };
};

export default function news() {
  return (
    <>
      <section>
        <div className={style.logo_wrap}>
          <Link href="/">
            <img src="/images/logo-abscisa-vector.svg" alt="abscisa3d logo" />
          </Link>
        </div>
        <div className={style.generalContainer}>
          <div>
            <h3 className={style.topHeader}>Prensa</h3>
          </div>
          <section className={style.wrapper_testimonials}>
            <div className={style.cardsContainer}>
              {newsData.map((elem) => {
                return (
                  <div className={style.newsCard}>
                    <a
                      href={elem.link}
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <div className={style.image}>
                        <img src={elem.img} alt={elem.font} />
                      </div>
                      <div className={style.container_testimonial}>
                        <h4>{elem.title}</h4>
                        <h6>{elem.font}</h6>
                        <p>{elem.text}</p>
                        <a
                          href={elem.link}
                          target="_blank"
                          className={style.newsAnchor}
                          style={{ textDecoration: "none" }}
                        >
                          <p className={style.leerMas}>
                            Leer más
                            <span>
                              <img
                                className={style.chevronRight}
                                src="https://res.cloudinary.com/dci5hxl4x/image/upload/v1639833154/chevron_right_u28er2.svg"
                                alt="chevron right #abscisa3d"
                              />
                            </span>
                          </p>
                        </a>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
