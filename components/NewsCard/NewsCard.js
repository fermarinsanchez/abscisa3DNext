import React from "react";
import style from "./NewsCard.module.css";
const NewsCard = ({ index, data }) => {
  return (
    <div>
      <a
        href={data[index].link}
        target="_blank"
        style={{ textDecoration: "none", color: "white" }}
      >
        <div className={style.root}>
          <div className={style.image}>
            <img src={data[index].img} alt={data[index].font} />
          </div>
          <p className={style.font}>{data[index].font}</p>
          <h6>{data[index].title}</h6>
          <a
            href={data[index].link}
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
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
};

export { NewsCard };
