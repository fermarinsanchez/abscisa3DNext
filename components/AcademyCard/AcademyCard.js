import React from "react";
import { isMobile, isTablet } from "react-device-detect";
import styles from "./AcademyCard.module.css";
const AcademyCard = ({ imagePosition, src, title, targetId, description }) => {
  return (
    <div className={styles.root}>
      <div
        className={styles.image}
        style={{ order: isMobile && !isTablet ? 0 : imagePosition }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background: `url(${src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundPosition: "cover",
          }}
        />
      </div>
      <div className={styles.container}>
        <h5 style={{ marginBottom: "16px" }}>{title}</h5>
        {description.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
        <a
          href={`#${targetId}`}
          style={{
            marginTop: "16px",
            textDecoration: "none",
            color: "#05f0d4",
          }}
        >
          Solicita información
        </a>
      </div>
    </div>
  );
};

export default AcademyCard;
