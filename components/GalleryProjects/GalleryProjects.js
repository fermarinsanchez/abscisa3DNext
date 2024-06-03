import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Gallery } from "react-grid-gallery";
import { Caption } from "./components/Caption";
import Link from "next/link";
import style from "../../styles/Home.module.css"

const GalleryProjects = (imagesData) => {
  const images = [
    {
      src: "https://res.cloudinary.com/dci5hxl4x/image/upload/v1713115165/ABSCISA2024/2020-Monasterio_de_Ucle%CC%81s_yi0bnt.jpg",
      original:
        "https://res.cloudinary.com/dci5hxl4x/image/upload/v1713115165/ABSCISA2024/2020-Monasterio_de_Ucle%CC%81s_yi0bnt.jpg",
      caption: "2020 - Monasterio de Uclés",
      alt: "2020 - Monasterio de Uclés",
      thumbnailCaption: <Caption text="2020 - Monasterio de Uclés" />,
      width: 320,
      height: 174,
    },

    {
      src: "https://res.cloudinary.com/dci5hxl4x/image/upload/v1713115173/ABSCISA2024/2023-Fachada_de_edificios_pxrskt.png",
      original:
        "https://res.cloudinary.com/dci5hxl4x/image/upload/v1713115173/ABSCISA2024/2023-Fachada_de_edificios_pxrskt.png",
      caption: "2023 - Fachada de edificios",
      alt: "2023 - Fachada de edificios",
      thumbnailCaption: <Caption text="2023 - Fachada de edificios" />,
      width: 2500,
      height: 1179,
    },

    {
      src: "https://res.cloudinary.com/dci5hxl4x/image/upload/v1713115170/ABSCISA2024/2021-Planta_industrial_wmc9mb.jpg",
      original:
        "https://res.cloudinary.com/dci5hxl4x/image/upload/v1713115170/ABSCISA2024/2021-Planta_industrial_wmc9mb.jpg",
      caption: "2021 - Planta industrial",
      alt: "2021 - Planta industrial",
      thumbnailCaption: <Caption text="2021 - Planta industrial" />,
      width: 5000,
      height: 2504,
    },
    {
      src: "https://res.cloudinary.com/dci5hxl4x/image/upload/v1713115168/ABSCISA2024/2023-Puerta_de_Alfonso_VI_f5w1av.png",
      original:
        "https://res.cloudinary.com/dci5hxl4x/image/upload/v1713115168/ABSCISA2024/2023-Puerta_de_Alfonso_VI_f5w1av.png",
      caption: "2023 - Puerta de Alfonso VI",
      alt: "2023 - Puerta de Alfonso VI",
      thumbnailCaption: <Caption text="2023 - Puerta de Alfonso VI" />,
      width: 1612,
      height: 788,
    },
    {
      src: "https://res.cloudinary.com/dci5hxl4x/image/upload/v1713115168/ABSCISA2024/2019-Estacio%CC%81n_Metro_Madrid_zkdkpu.png",
      original:
        "https://res.cloudinary.com/dci5hxl4x/image/upload/v1713115168/ABSCISA2024/2019-Estacio%CC%81n_Metro_Madrid_zkdkpu.png",
      caption: "2019 - Estación Metro Madrid",
      alt: "2019 - Estación Metro Madrid",
      thumbnailCaption: <Caption text="2019 - Estación Metro Madrid" />,
      width: 1920,
      height: 1080,
    },
    {
      src: "https://res.cloudinary.com/dci5hxl4x/image/upload/v1713115169/ABSCISA2024/2021-Campanille_de_Atocha_w7h5jk.jpg",
      original:
        "https://res.cloudinary.com/dci5hxl4x/image/upload/v1713115169/ABSCISA2024/2021-Campanille_de_Atocha_w7h5jk.jpg",
      caption: "2021 - Campanille de Atocha",
      alt: "2021 - Campanille de Atocha",
      thumbnailCaption: <Caption text="2021 - Campanille de Atocha" />,
      width: 2445,
      height: 2445,
    },

    {
      src: "https://res.cloudinary.com/dci5hxl4x/image/upload/v1713115163/ABSCISA2024/2018-Edificio_oficinas_pizoti.jpg",
      original:
        "https://res.cloudinary.com/dci5hxl4x/image/upload/v1713115163/ABSCISA2024/2018-Edificio_oficinas_pizoti.jpg",
      caption: "2018 - Edificio oficinas",
      alt: "2018 - Edificio oficinas",
      thumbnailCaption: <Caption text="2018 - Edificio oficinas" />,
      width: 400,
      height: 273,
    },
  ];
  const [index, setIndex] = useState(-1);
  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index, item) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);
  return (
    <section id="nuestros_servicios" style={{ margin: "0 7vw 0 7vw" }}>
      <h3>Proyectos</h3>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
        margin={36}
        rowHeight={300}
      />
      {!!currentImage && (
        <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          iconColor={"rgb(5, 240, 212)"}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
      <Link href="/projects" passHref>
        <div className={style.container_mas_proyectos}>
          <div className={style.container_with_arrow}>
            <img
              src="/images/icono_mas_proyectos.png"
              alt="more projects icon #ABSCISA3d"
              className={style.projectsIcon}
            />
            <p>Más proyectos</p>
            <svg
              viewBox="0 0 12 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9041 2.61793L8.99682 0.110804C8.66288 -0.119208 8.48609 0.0187998 8.4468 0.43282V2.22691H0.53038C0.235725 2.22691 0 2.50292 0 2.84794C0 3.21596 0.235725 3.49197 0.53038 3.49197H8.4468V5.42407C8.46644 6.0221 8.66288 6.1141 8.99682 5.88409L11.9041 3.05495C12.022 2.93994 12.0416 2.77894 11.9041 2.61793Z"
                fill="#05f0d4"
              />
            </svg>
          </div>
        </div>
      </Link>
    </section>
  );
};

export { GalleryProjects };
