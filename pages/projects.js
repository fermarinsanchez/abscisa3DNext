import Link from 'next/link'
import { useState } from 'react'
import style from '../styles/Proyectos.module.css'
import { Caption } from '../components/GalleryProjects/components/Caption'
import { Gallery } from 'react-grid-gallery'
import Lightbox from "react-image-lightbox";







const Proyectos = () => {

    const images = [
        {
            src: "https://res.cloudinary.com/dci5hxl4x/image/upload/v1716742476/ABSCISA2024/Galeria%20de%20proyectos/01-2024-Catedral_de_Toledo_hgs2oi.jpg",
            original:
                "https://res.cloudinary.com/dci5hxl4x/image/upload/v1716742476/ABSCISA2024/Galeria%20de%20proyectos/01-2024-Catedral_de_Toledo_hgs2oi.jpg",
            caption: "2024 - Catedral de Toledo",
            alt: "2024 - Catedral de Toledo",
            thumbnailCaption: <Caption text="2024 - Catedral de Toledo" />,
            width: 2400,
            height: 1095,
        },
        {
            src: "https://res.cloudinary.com/dci5hxl4x/image/upload/v1716742473/ABSCISA2024/Galeria%20de%20proyectos/02-2018-Edificio_oficinas_tzklmr.jpg",
            original:
                "https://res.cloudinary.com/dci5hxl4x/image/upload/v1716742473/ABSCISA2024/Galeria%20de%20proyectos/02-2018-Edificio_oficinas_tzklmr.jpg",
            caption: "2018 - Edificio oficinas",
            alt: "2018 - Edificio oficinas",
            thumbnailCaption: <Caption text="2018 - Edificio oficinas" />,
            width: 400,
            height: 273,
        },
        {
            src: "https://res.cloudinary.com/dci5hxl4x/image/upload/v1716742478/ABSCISA2024/Galeria%20de%20proyectos/03-2019-Estacio%CC%81n_Metro_Madrid_ljnou8.png",
            original:
                "https://res.cloudinary.com/dci5hxl4x/image/upload/v1716742478/ABSCISA2024/Galeria%20de%20proyectos/03-2019-Estacio%CC%81n_Metro_Madrid_ljnou8.png",
            caption: "2019 - Estación Metro Madrid",
            alt: "2019 - Estación Metro Madrid",
            thumbnailCaption: <Caption text="2019 - Estación Metro Madrid" />,
            width: 1920,
            height: 1080,
        },
        {
            src: "https://res.cloudinary.com/dci5hxl4x/image/upload/v1716742485/ABSCISA2024/Galeria%20de%20proyectos/04-2020-Planta_industrial_neeasd.jpg",
            original:
                "https://res.cloudinary.com/dci5hxl4x/image/upload/v1716742485/ABSCISA2024/Galeria%20de%20proyectos/04-2020-Planta_industrial_neeasd.jpg",
            caption: "2020 - Planta industrial",
            alt: "2020 - Planta industrial",
            thumbnailCaption: <Caption text="2020 - Planta industrial" />,
            width: 5000,
            height: 2373,
        },
        {
            src: "https://res.cloudinary.com/dci5hxl4x/image/upload/v1716742486/ABSCISA2024/Galeria%20de%20proyectos/05-2023-Fachada_de_edificios_gmelci.png",
            original:
                "https://res.cloudinary.com/dci5hxl4x/image/upload/v1716742486/ABSCISA2024/Galeria%20de%20proyectos/05-2023-Fachada_de_edificios_gmelci.png",
            caption: "2023 - Fachada de edificios",
            alt: "2023 - Fachada de edificios",
            thumbnailCaption: <Caption text="2023 - Fachada de edificios" />,
            width: 2500,
            height: 1179,
        },
        {
            src: "https://res.cloudinary.com/dci5hxl4x/image/upload/v1716742474/ABSCISA2024/Galeria%20de%20proyectos/06-2020-Monasterio_de_Ucle%CC%81s_jx1hbr.jpg",
            original:
                "https://res.cloudinary.com/dci5hxl4x/image/upload/v1716742474/ABSCISA2024/Galeria%20de%20proyectos/06-2020-Monasterio_de_Ucle%CC%81s_jx1hbr.jpg",
            caption: "2020 - Monasterio de Uclés",
            alt: "2020 - Monasterio de Uclés",
            thumbnailCaption: <Caption text="2020 - Monasterio de Uclés" />,
            width: 2500,
            height: 1179,
        },
        {
            src: "https://res.cloudinary.com/dci5hxl4x/image/upload/v1716742479/ABSCISA2024/Galeria%20de%20proyectos/07-2019-Aeropuerto-ABSCISA3d_nysrrm.png",
            original:
                "https://res.cloudinary.com/dci5hxl4x/image/upload/v1716742479/ABSCISA2024/Galeria%20de%20proyectos/07-2019-Aeropuerto-ABSCISA3d_nysrrm.png",
            caption: "2019 - Aeropuerto",
            alt: "2019 - Aeropuerto",
            thumbnailCaption: <Caption text="2019 - Aeropuerto" />,
            width: 1647,
            height: 826,
        },
        {
            src: "https://res.cloudinary.com/dci5hxl4x/image/upload/v1716742482/ABSCISA2024/Galeria%20de%20proyectos/08-2021-Campanille_de_Atocha_rqnmue.jpg",
            original:
                "https://res.cloudinary.com/dci5hxl4x/image/upload/v1716742482/ABSCISA2024/Galeria%20de%20proyectos/08-2021-Campanille_de_Atocha_rqnmue.jpg",
            caption: "2021 - Campanille de Atocha",
            alt: "2021 - Campanille de Atocha",
            thumbnailCaption: <Caption text="2021 - Campanille de Atocha" />,
            width: 2445,
            height: 2445,
        },
        {
            src: "https://res.cloudinary.com/dci5hxl4x/image/upload/v1716742483/ABSCISA2024/Galeria%20de%20proyectos/09-2023-Yacimiento_Vega_Baja_fctiot.png",
            original:
                "https://res.cloudinary.com/dci5hxl4x/image/upload/v1716742483/ABSCISA2024/Galeria%20de%20proyectos/09-2023-Yacimiento_Vega_Baja_fctiot.png",
            caption: "2023 - Yacimiento Vega Baja",
            alt: "2023 - Yacimiento Vega Baja",
            thumbnailCaption: <Caption text="2023 - Yacimiento Vega Baja" />,
            width: 1920,
            height: 1080,
        },
        {
            src: "https://res.cloudinary.com/dci5hxl4x/image/upload/v1716742481/ABSCISA2024/Galeria%20de%20proyectos/10-2021-Planta_industrial_lmgg6q.jpg",
            original:
                "https://res.cloudinary.com/dci5hxl4x/image/upload/v1716742481/ABSCISA2024/Galeria%20de%20proyectos/10-2021-Planta_industrial_lmgg6q.jpg",
            caption: "2021 - Planta industrial",
            alt: "2021 - Planta industrial",
            thumbnailCaption: <Caption text="2021 - Planta industrial" />,
            width: 5000,
            height: 2504,
        },
        {
            src: "https://res.cloudinary.com/dci5hxl4x/image/upload/v1716742480/ABSCISA2024/Galeria%20de%20proyectos/11-2023-Puerta_de_Alfonso_VI_dallj5.png",
            original:
                "https://res.cloudinary.com/dci5hxl4x/image/upload/v1716742480/ABSCISA2024/Galeria%20de%20proyectos/11-2023-Puerta_de_Alfonso_VI_dallj5.png",
            caption: "2023 - Puerta de Alfonso VI",
            alt: "2023 - Puerta de Alfonso VI",
            thumbnailCaption: <Caption text="2023 - Puerta de Alfonso VI" />,
            width: 1612,
            height: 788,
        },
        {
            src: "https://res.cloudinary.com/dci5hxl4x/image/upload/v1716742475/ABSCISA2024/Galeria%20de%20proyectos/12-2018-Roco%CC%81dromo_m6fvt1.jpg",
            original:
                "https://res.cloudinary.com/dci5hxl4x/image/upload/v1716742475/ABSCISA2024/Galeria%20de%20proyectos/12-2018-Roco%CC%81dromo_m6fvt1.jpg",
            caption: "2018 - Rocódromo",
            alt: "2018 - Rocódromo",
            thumbnailCaption: <Caption text="2018 - Rocódromo" />,
            width: 1797,
            height: 834,
        },
        {
            src: "https://res.cloudinary.com/dci5hxl4x/image/upload/v1716742476/ABSCISA2024/Galeria%20de%20proyectos/13-2019-Castillo_wucgdm.jpg",
            original:
                "https://res.cloudinary.com/dci5hxl4x/image/upload/v1716742476/ABSCISA2024/Galeria%20de%20proyectos/13-2019-Castillo_wucgdm.jpg",
            caption: "2019 - Castillo",
            alt: "2019 - Castillo",
            thumbnailCaption: <Caption text="2019 - Castillo" />,
            width: 1705,
            height: 857,
        },
    ]

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
        <div>
            <section>

                <div className={style.logo_wrap}>
                    <Link href="/">
                        <a>
                            <img
                                src='/images/logo-abscisa-vector.svg'
                                alt='abscisa3d logo'
                            />
                        </a>
                    </Link>
                </div>
                <div className={style.content}>
                    <div className={style.cardsContainer} id='projectsContainer'>
                        <div className={style.projectsHeader}>
                            <h1>Nuestros Proyectos</h1>
                            <p>En ABSCISA3d capturamos la realidad y la documentamos según las necesidades de nuestros clientes a los cuales asesoramos gracias a nuestra experiencia.
                                Os presentamos algunos de nuestros proyectos, en los que con la nube de puntos capturada, modelamos en 3d y BIM, delineamos, hacemos inspección y mediciones  con el proyecto, mallado y texturizado de estructuras patrimoniales, y mucho más.
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{ margin: "0 7vw 0 7vw" }}>
                    <Gallery
                        images={images}
                        onClick={handleClick}
                        enableImageSelection={false}
                        margin={36}
                        rowHeight={300}
                    />
                    {/* {!!currentImage && (
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
                )} */}
                </div>
            </section>
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
        </div>
    )
}

export default Proyectos